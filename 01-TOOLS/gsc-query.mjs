#!/usr/bin/env node

/**
 * gsc-query.mjs
 * 
 * Consulta métricas reales de Google Search Console vía Service Account (OAuth2 JWT).
 * Cero dependencias npm externas: utiliza crypto y fetch nativos de Node.js.
 * 
 * Uso:
 *   node 01-TOOLS/gsc-query.mjs --site "https://alexandrabarroso.com/"
 *   node 01-TOOLS/gsc-query.mjs --days 30 --type pages --limit 20
 *   node 01-TOOLS/gsc-query.mjs --site "sc-domain:alexandrabarroso.com" --type queries
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Parámetros por defecto
const args = process.argv.slice(2);
function getArg(flag, defaultValue) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return defaultValue;
}

const siteUrl = getArg('--site', 'sc-domain:alexandrabarroso.com');
const days = parseInt(getArg('--days', '28'), 10);
const dimension = getArg('--type', 'queries'); // 'queries' | 'pages' | 'devices' | 'countries'
const limit = parseInt(getArg('--limit', '25'), 10);
const keyPath = getArg('--key', path.join(__dirname, 'keys', 'gsc-credentials.json'));
const asJson = args.includes('--json');

// Mapeo de dimensión
const dimensionMap = {
  queries: 'query',
  pages: 'page',
  devices: 'device',
  countries: 'country'
};

const gscDimension = dimensionMap[dimension] || 'query';

// Comprobación de credenciales
if (!fs.existsSync(keyPath)) {
  console.error(`\n❌ Error: No se encontró el archivo de credenciales de Google Search Console.`);
  console.error(`   Ruta esperada: ${keyPath}\n`);
  console.error(`📋 Pasos para generarlo:`);
  console.error(`   1. Entra en Google Cloud Console (https://console.cloud.google.com).`);
  console.error(`   2. Crea o selecciona un proyecto y habilita la "Google Search Console API".`);
  console.error(`   3. En "IAM y administración" > "Cuentas de servicio", crea una nueva cuenta de servicio.`);
  console.error(`   4. Entra en la cuenta de servicio > pestaña "Claves" > "Agregar clave" > "Crear clave nueva" (JSON).`);
  console.error(`   5. Guarda el archivo descargado como: 01-TOOLS/keys/gsc-credentials.json`);
  console.error(`   6. En Google Search Console (Ajustes > Usuarios y permisos), añade el email de la cuenta de servicio como "Lector".\n`);
  process.exit(1);
}

let credentials;
try {
  credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
} catch (err) {
  console.error(`❌ Error al leer el archivo JSON de credenciales: ${err.message}`);
  process.exit(1);
}

if (!credentials.client_email || !credentials.private_key) {
  console.error(`❌ Error: El archivo de credenciales no contiene client_email o private_key válidos.`);
  process.exit(1);
}

/**
 * Codificación Base64URL según RFC 7515
 */
function base64url(input) {
  const buf = typeof input === 'string' ? Buffer.from(input) : input;
  return buf.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/**
 * Obtener Access Token mediante JWT firmado con la Private Key
 */
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const claimSet = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedClaimSet = base64url(JSON.stringify(claimSet));
  const unsignedToken = `${encodedHeader}.${encodedClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(credentials.private_key);
  const jwt = `${unsignedToken}.${base64url(signature)}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error de autenticación con Google OAuth2 (${res.status}): ${errorText}`);
  }

  const tokenData = await res.json();
  return tokenData.access_token;
}

/**
 * Formatear fechas YYYY-MM-DD
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

async function run() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 2); // Search Console tiene un retardo de ~2 días
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const startStr = formatDate(startDate);
  const endStr = formatDate(endDate);

  if (!asJson) {
    console.log(`\n🔍 Conectando a Google Search Console API...`);
    console.log(`   Propiedad : ${siteUrl}`);
    console.log(`   Período   : ${startStr} a ${endStr} (${days} días)`);
    console.log(`   Dimensión : ${dimension} (${gscDimension})`);
    console.log(`   Límite    : ${limit} filas\n`);
  }

  const accessToken = await getAccessToken();

  const encodedSite = encodeURIComponent(siteUrl);
  const apiUrl = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`;

  const requestBody = {
    startDate: startStr,
    endDate: endStr,
    dimensions: [gscDimension],
    rowLimit: limit,
    aggregationType: 'auto'
  };

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error al consultar Search Console (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  const rows = data.rows || [];

  if (asJson) {
    console.log(JSON.stringify(rows, null, 2));
    return;
  }

  if (rows.length === 0) {
    console.log(`ℹ️ No se registraron datos en el período seleccionado para esta dimensión.`);
    return;
  }

  console.log(`| ${dimension.toUpperCase().padEnd(45)} | Clics | Impresiones | CTR (%) | Posición |`);
  console.log(`|${'-'.repeat(47)}|-------|-------------|---------|----------|`);

  for (const r of rows) {
    const key = (r.keys && r.keys[0]) ? r.keys[0] : 'N/A';
    const displayKey = key.length > 45 ? key.substring(0, 42) + '...' : key.padEnd(45);
    const clicks = String(r.clicks).padStart(5);
    const impressions = String(r.impressions).padStart(11);
    const ctr = (r.ctr * 100).toFixed(2).padStart(6) + '%';
    const position = r.position.toFixed(1).padStart(8);

    console.log(`| ${displayKey} | ${clicks} | ${impressions} | ${ctr} | ${position} |`);
  }

  console.log(`\n✅ Consulta completada con éxito (${rows.length} resultados devueltos).\n`);
}

run().catch(err => {
  console.error(`\n❌ Error de ejecución: ${err.message}\n`);
  process.exit(1);
});

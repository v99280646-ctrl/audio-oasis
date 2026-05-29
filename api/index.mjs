import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

function nodeHeadersToFetchHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(nodeHeaders || {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const val of value) {
        headers.append(key, val);
      }
    } else {
      headers.set(key, value.toString());
    }
  }
  return headers;
}

async function createRequest(req) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const url = `${protocol}://${host}${req.url}`;
  const headers = nodeHeadersToFetchHeaders(req.headers);
  const init = {
    method: req.method,
    headers,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const body = await readRequestBody(req);
    if (body.length > 0) {
      init.body = body;
    }
  }

  return new Request(url, init);
}

async function sendResponse(res, response) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (response.body === null) {
    res.end();
    return;
  }

  const bodyBuffer = Buffer.from(await response.arrayBuffer());
  res.end(bodyBuffer);
}

export default async function handler(req, res) {
  const serverPath = join(__dirname, '../dist/server/index.mjs');
  const serverModule = await import(serverPath);
  const server = serverModule.default ?? serverModule;
  const request = await createRequest(req);
  const response = await server.fetch(request, undefined, undefined);
  await sendResponse(res, response);
}

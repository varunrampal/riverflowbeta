import { Readable } from "node:stream";
import { handleBlogApi } from "../../../../server/index.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const runHandler = async (request) => {
  const requestBody = Buffer.from(await request.arrayBuffer());
  const req = Readable.from(requestBody.length ? [requestBody] : []);
  req.method = request.method;
  req.headers = Object.fromEntries(request.headers.entries());
  req.url = new URL(request.url).pathname + new URL(request.url).search;

  let status = 200;
  const headers = new Headers();
  let responseBody = "";
  const res = {
    writeHead(nextStatus, nextHeaders = {}) {
      status = nextStatus;
      Object.entries(nextHeaders).forEach(([name, value]) => headers.set(name, String(value)));
      return this;
    },
    end(body = "") {
      responseBody += body ? String(body) : "";
    },
  };

  try {
    await handleBlogApi(req, res, new URL(request.url));
  } catch (error) {
    status = error.status || 500;
    headers.set("Content-Type", "application/json; charset=utf-8");
    responseBody = JSON.stringify({ ok: false, error: error.message || "Server error." });
  }

  return new Response(responseBody, { status, headers });
};

export const GET = runHandler;
export const POST = runHandler;

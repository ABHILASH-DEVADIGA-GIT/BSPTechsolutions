import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// Standard TanStack Start server entry for Node.js (no Cloudflare Workers needed)
export default {
  async fetch(request: Request) {
    try {
      const { default: handler } = await import("@tanstack/react-start/server-entry");
      // @ts-expect-error – handler shape varies by adapter
      const response = await handler.fetch(request);
      if (response.status >= 500) {
        const ct = response.headers.get("content-type") ?? "";
        if (ct.includes("application/json")) {
          const body = await response.clone().text();
          try {
            const payload = JSON.parse(body) as Record<string, unknown>;
            if (payload.unhandled === true) {
              console.error(consumeLastCapturedError() ?? new Error(`SSR error: ${body}`));
              return brandedErrorResponse();
            }
          } catch {
            // not JSON error body, pass through
          }
        }
      }
      return response;
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

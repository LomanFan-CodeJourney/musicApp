import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

// Middleware edge function happens on the edge of the CDN before the server, it happens on the network layer and it is SEO friendly. It does not run in node environment or the front-end app environment, it is in an environment similar to web worker and happens on the network layer. It does not have access to window, it only has access to low level primitives like a request or response object, so it operates faster. (Note: For deploying environment, Heroku runs node.)

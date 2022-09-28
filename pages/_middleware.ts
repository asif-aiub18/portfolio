import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const geo = request.geo;
  const headers = request.headers;
  console.log({
    geo: JSON.stringify(geo, null, 2),
    headers: JSON.stringify(headers, null, 2),
  });
  const obj: any = {};
  headers.forEach((v, k) => {
    obj[k] = v;
  });
  console.log({ obj });

  return NextResponse.next();
  //   return NextResponse.redirect(new URL("/about-2", request.url));
}

export const config = {
  matcher: ["/"],
};

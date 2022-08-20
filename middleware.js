import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const { nextUrl, geo } = req;
  console.log(geo); //=> always empty {}
  const country = geo.country || "US";
  nextUrl.searchParams.set("locale", country);

  return NextResponse.rewrite(nextUrl);
}

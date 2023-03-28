import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("user-token")?.value;
  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  const url = req.url;

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.url.includes("/channels") && verifiedToken) {
    return NextResponse.redirect(new URL("/channels"));
  }
}

export const config = {
  matcher: ["/channels"],
};

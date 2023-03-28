import { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("user-token")?.value;
  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));
}

export const config = {
  matcher: ["/channels"],
};

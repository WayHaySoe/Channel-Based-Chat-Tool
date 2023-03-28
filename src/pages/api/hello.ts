import { useState, useEffect } from "react";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch("http://localhost:3001/");
  const data = await response.json();
  res.status(200).json({ name: data });
}

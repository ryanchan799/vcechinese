import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function getRequest(path: string) {
  const res = await fetch(process.env.WEB_DOMAIN + path, { cache: "no-store" });
  const body = await res.json();
  return JSON.parse(body.data);
}

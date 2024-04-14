import { prisma } from "@/script";

export async function GET() {
  const res = await prisma.users.findMany();
  const data = JSON.stringify(res);

  console.log("Users: " + data);

  return Response.json({ data });
}

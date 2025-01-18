import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest) {
  try {
    const sessionId = req.body.sessionId;
    const admin = await prisma.admin.findFirst({ where: { sessionId } });

    if (!admin) {
      return new Response(
        JSON.stringify({ status: "not-found", redirectTo: "/signup" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ status: "exists", redirectTo: "/login" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

import { respData, respErr } from "@/lib/resp";
import prisma from "../../../../lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { model_id: string } }
) {
  try {
    const { model_id } = params;

    const resource = await prisma.resource.findUnique({
      where: { model_id },
    });

    if (!resource) {
      return respErr("Resource not found");
    }
    // console.log("---resource:", resource);
    return respData(resource);
  } catch (e) {
    console.error("Resource query failed: ", e);
    return respErr("Resource query failed");
  }
}
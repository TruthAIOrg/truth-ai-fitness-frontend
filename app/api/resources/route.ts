// import { respData, respErr } from "@/lib/resp";
// import prisma from "../../../lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log(`---resources req=`, body);
//     let { page, per_page } = body;
//     if (page == 0) {
//       page = 1;
//     }
//     if (per_page == 0) {
//       per_page = 10;
//     }
//     const resources = await prisma.resource.findMany({
//       take: per_page,
//       skip: (page - 1) * per_page,
//     });

//     console.log("---resources:", resources);
//     return respData(resources);
//   } catch (e) {
//     console.error("resources failed: ", e);
//     return respErr("resources failed");
//   }
// }

import { respData, respErr } from "@/lib/resp";
import prisma from "../../../lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const per_page = parseInt(searchParams.get('per_page') || '10');

    const resources = await prisma.resource.findMany({
      take: per_page,
      skip: (page - 1) * per_page,
    });

    // console.log("---resources:", resources);
    return respData(resources);
  } catch (e) {
    console.error("Resources query failed: ", e);
    return respErr("Resources query failed");
  }
}
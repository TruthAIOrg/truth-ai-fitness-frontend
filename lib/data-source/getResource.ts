import { prisma } from "../db";
import { Content, ResourceRaw } from "./getResources";

export async function getResource(id: string) {
    const res = await prisma.$queryRaw<ResourceRaw[]>`SELECT * FROM tb_res_zh WHERE model_id = ${id}`;
    let content = [] as Content[];
    try {
        content = JSON.parse(res[0].content!);
    } catch (e) {
        console.log(e);
    }
    return {
        ...res[0],
        content,
    }
}

export type Resource = ReturnAsyncType<typeof getResource>
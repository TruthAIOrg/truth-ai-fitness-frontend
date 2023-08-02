import { prisma } from "../db"
import { Content, ResourceRaw } from "./getResources";


export const getResourceBySearch = async (params:{search: string | null, page: number, pageSize: number}) => {
    const {search, page, pageSize} = params;
    if (!search)
        return [];
    const query = `%${search}%`;
    const ids = await prisma.$queryRaw<ResourceRaw[]>`
        SELECT id FROM "tb_res_zh"
        WHERE "item_name" LIKE ${query}
        OR "part_name" LIKE ${query}
        OR "tag_text" LIKE ${query}
        OR "content" LIKE ${query};
    `;
    const res = await prisma.tb_res_zh.findMany({
        where: { id: { in: ids.map((row) => row.id) } },
        // skip: (page - 1) * pageSize,
        // take: pageSize,
      });
      
      
    return res as unknown as ResourceRaw[]
}
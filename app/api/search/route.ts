import { getResourceBySearch } from "@/lib/data-source/getResourceBySearch"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const page = searchParams.get('page') || 1
    const pageSize = searchParams.get('pageSize') || 10
    const res = await getResourceBySearch({search: query, page: Number(page), pageSize: Number(pageSize)})
    return NextResponse.json(res)
}
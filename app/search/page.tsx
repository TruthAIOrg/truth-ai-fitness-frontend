// import Home from "views/home";

import { getResourceBySearch } from "@/lib/data-source/getResourceBySearch";
import { getResourceList } from "@/lib/data-source/getResources";
import Home from "@/views/home/home";
import Pagination from "@/views/home/pagination";

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined }
}



export default async function PageSearch({ searchParams }: Props) {
    const query = searchParams?.query ? searchParams.query as string : ""
    const page = searchParams?.page ? parseInt(searchParams.page as string) : 1
    const pageSize = searchParams?.pageSize ? parseInt(searchParams.page_size as string) : 10
    const res = await getResourceBySearch({ search: query, page, pageSize })
    return (
        <>
            <Home resources={res} />
            <Pagination total={res.length} pageSize={pageSize} current={page} />
        </>
    )
}

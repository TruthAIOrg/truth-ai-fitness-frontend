// import Home from "views/home";

import { getResourceList } from "@/lib/data-source/getResources";
import Home from "@/views/home/home";
import Pagination from "@/views/home/pagination";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}



export default async function PageRoot({ searchParams }: Props) {
  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1
  const page_size = searchParams?.pageSize ? parseInt(searchParams.page_size as string) : 10
  const res = await getResourceList()
  const resources  = res.slice((page - 1) * page_size, page * page_size)

  return (
    <>
      <Home resources={resources} />
      <Pagination total={res.length} pageSize={page_size} current={page} />

    </>
  )
}

"use client"
import { TrainingModelVideo } from "../training-model/training-model-video"
import Link from "next/link"
import { MuteText, Text } from "@/components/typography"
import { Resource } from "@/lib/data-source/getResource"
import { ResourceRaw } from "@/lib/data-source/getResources"

interface HomeProps {
    resources: ResourceRaw[]
}

export default function Home({ resources }: HomeProps) {
    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                {resources.map((resource) => (
                    <li key={resource.model_id} className="transition-all relative shadow hover:-translate-y-1 group-hover:opacity-75 hover:shadow-lg rounded-md">
                        <Link href={`/training-model/${resource.model_id}`} className="flex sm:block">
                            <div className="group aspect-h-7 w-2/5 aspect-w-10 block sm:w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <div className=" pointer-events-none object-cover ">
                                    <TrainingModelVideo className="h-[80px] sm:h-[207px]" height={100} src={resource.video_url} />
                                </div>
                                {/* <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" /> */}
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {resource.part_name}</span>
                                </button>
                            </div>
                            <div className="pl-4 sm:pl-0 py-1 sm:pb-3 flex flex-col justify-between">
                                <Text className="px-2  pointer-events-none block truncate font-medium ">{resource.item_name}</Text>
                                <MuteText className="px-2  pointer-events-none block text-xs font-medium ">{resource.part_name}</MuteText>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

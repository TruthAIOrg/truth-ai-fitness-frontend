export interface ResourceRaw {
    content: string
    id: number
    item_name: string
    model_id: string
    part_name: string
    tag_text: string
    video_url: string
}

export interface Content {
    title: string
    text_list: TextList[]
}

interface TextList {
    description: string
    order_list: string[]
}


export type Resource = ReturnAsyncType<typeof getResourceList>[number]

export async function getResourceList() {
    const res = await fetch(process.env.BASE_URL + "/resources");
    const data = await res.json() as ResourceRaw[];
    return data.map((resource) => {
        let content = [] as Content[];
        try {
            content = JSON.parse(resource.content);
        } catch (e) {
            console.log(e);
        }
        return {
            ...resource,
            content,
        }
    })
}

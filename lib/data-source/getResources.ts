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

export async function getResourceList({page, pageSize}: {page: number, pageSize: number}) {
    const res = await fetch(process.env.BASE_URL + "/resources" + `?page=${page}&perPage=${pageSize}`);

    if (!res.ok) {
        console.error('Failed to fetch:', res.status, res.statusText);
        throw new Error('Failed to fetch resources');
    }

    // const data = await res.json() as ResourceRaw[];

    const responseData = await res.json();
    
    if (responseData.code !== 0) {
        throw new Error(responseData.message || 'Failed to fetch resources');
    }

    const resources = responseData.data as ResourceRaw[];

    return resources.map((resource) => {
        let content = [] as Content[];
        try {
            content = JSON.parse(resource.content);
        } catch (e) {
            console.log('---JSON parse error:',e);
        }
        return {
            ...resource,
            content,
        }
    })
}

// export async function getResourceList({page, pageSize}: {page: number, pageSize: number}) {
//     const res = await fetch(process.env.BASE_URL + "/resources", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ page, per_page: pageSize })
//     });
    
//     console.log('---res:', res);

//     if (!res.ok) {
//         console.error('Failed to fetch:', res.status, res.statusText);
//         throw new Error('Failed to fetch resources');
//     }

//     const responseData = await res.json();
    
//     if (responseData.code !== 0) {
//         throw new Error(responseData.message || 'Failed to fetch resources');
//     }

//     const resources = responseData.data as ResourceRaw[];
//     return resources.map((resource) => {
//         let content = [] as Content[];
//         try {
//             console.log('---resource.content:', resource.content);
//             content = JSON.parse(resource.content);
//         } catch (e) {
//             console.log('---JSON parse error:', e);
//         }
//         return {
//             ...resource,
//             content,
//         }
//     });
// }

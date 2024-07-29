import { Resource, Content, ResourceRaw } from "./getResources";

export async function getResource(id: string) {
    const res = await fetch(process.env.BASE_URL + "/resources/" + id);
    // const resource = await res.json() as ResourceRaw;
    const responseData = await res.json();
    
    if (responseData.code !== 0) {
        throw new Error(responseData.message || 'Failed to fetch resources');
    }

    const resource = responseData.data as ResourceRaw;
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
}
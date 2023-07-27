import { Resource, Content, ResourceRaw } from "./getResources";

export async function getResource(id: string) {
    const res = await fetch(process.env.BASE_URL + "/resources/" + id);
    const resource = await res.json() as ResourceRaw;
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
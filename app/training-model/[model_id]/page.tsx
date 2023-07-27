import { getResource } from "@/lib/data-source/getResource";
import { getResourceList } from "@/lib/data-source/getResources";
import { TrainingModel } from "@/views/training-model";
 
type Props = {
  params: { model_id: string }
}
 
export async function generateStaticParams() {
 
  const resources = await getResourceList()

  return resources.map((resource) => ({
    params: { model_id: resource.model_id, },
  }))
}

 

export default async function PageTrainingModel({ params }: Props) {
    const resource = await getResource(params.model_id)
    return (
        <TrainingModel resource={resource}/>
    )
}
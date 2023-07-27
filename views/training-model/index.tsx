import { H2, H3, Text } from "@/components/typography"
import { TrainingModelVideo } from "./training-model-video"
import { Resource } from "@/lib/data-source/getResources"
import { Fragment } from "react"


interface TrainingModelProps {
    resource: Resource
}


export const TrainingModel = ({ resource }: TrainingModelProps) => {
    return <section>
        <TrainingModelVideo src={resource.video_url} />
        {
            resource.content.map((content, index) => {
                return (
                    <section className="mt-16" key={content.title}>
                        <H2 >{content.title}</H2>
                        {
                            content.text_list.map((text, index) => (
                                text.order_list.length === 0 ? 
                                <Text className="mt-2" key={index}>{text.description}</Text>
                                :
                                <div className="mt-2" key={text.description}>
                                    <H3 className="" key={index}>{text.description}</H3>
                                    <ul>
                                        {
                                            text.order_list.map((order, index) => (
                                                <Fragment key={order}>
                                                    <li>{order}</li>
                                                </Fragment>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </section>
                )
            })
        }
    </section>
}
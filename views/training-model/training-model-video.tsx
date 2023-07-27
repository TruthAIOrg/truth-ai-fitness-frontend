"use client"

interface TrainingModelVideoProps {
    src: string,
    width?: number
    height?: number
}

export const TrainingModelVideo: React.FC<TrainingModelVideoProps> = ({ src, height, width }) => {
    return (
        <>
            <video autoPlay={true} loop  muted playsInline>
                <source src={src.replace("http:", "")} />
            </video>
        </>
    )
}
"use client"

import { cn } from "@/lib/utils"

interface TrainingModelVideoProps {
    src: string,
    width?: number
    height?: number
    className?: string
}

export const TrainingModelVideo: React.FC<TrainingModelVideoProps> = ({ src,className, height, width }) => {
    if (!src) {
        return (
            <div  className={cn("flex bg-[#313237] justify-center items-center w-full", className)}>
                <svg className="sm:w-24 sm:h-24 w-10 h-10" stroke="currentColor" fill="#51545b" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"></path>
                </svg>
            </div>
        )
    }
    return (
        <>
            <video autoPlay={true} loop muted playsInline>
                <source src={src.replace("http:", "")} />
            </video>
        </>
    )
}
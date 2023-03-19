import { useEffect, useRef } from "react"

export default function Blob() {
    const blob = useRef(null)

    useEffect(() => {
        if(blob.current) {
            document.body.onpointermove = event => {
                const { clientX, clientY } = event
                
                blob.current.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 3000, fill: "forwards" })
                
            }
        }
    })

    
    return (<div id="blob" ref={blob}></div>)
}
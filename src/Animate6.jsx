// Here use the Svg

import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Animate6 = () => {
    const boxRef = useRef()
    const svgRef = useRef()

    useEffect(() => {
        let variablePath = "M 0 200 Q 200 200 400 200"
        let finalPath = "M 0 200 Q 200 200 400 200"

        boxRef.current.addEventListener('mousemove', function(dets) {
            variablePath = `M 0 200 Q ${dets.x} ${dets.y} 400 200`
            console.log(variablePath)
            gsap.to(svgRef.current, {
                attr: { d: variablePath },
                duration: 0.3,
                ease: 'power2.inOut',
            })
        })

        boxRef.current.addEventListener('mouseleave', function() {
            variablePath = finalPath
            gsap.to(svgRef.current, {
                attr: { d: variablePath },
                duration: 0.3,
                ease: 'elastic.out(1, 0.2)',
            })
        })
    }, [])

    return (
        <div className='h-screen w-full flex-wrap text-white bg-black'>
            <div className='h-1/6 w-full flex justify-center items-center text-4xl font-bold'>
                Please move the cursor over the line
            </div>
            <div className='h-5/6 w-full flex justify-center items-center font-bold'>
                <div className='h-[400px] w-[400px]' ref={boxRef}>
                    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 200 Q 200 200 400 200" stroke="white" fill="transparent" ref={svgRef} />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Animate6
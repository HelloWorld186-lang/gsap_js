//Here , I am using the pin of the scroll 

import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Animate5 = () => {
    const textRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        gsap.to(textRef.current, 
            {
                x: '-50%',
                opacity: 1,
                duration : 5,
                scrollTrigger : {
                    trigger :  containerRef.current,
                    scrub : 2,
                    pin : true,
                    markers : true,
                    start: 'top 10%', // this is the start and ending point of the start and end of the screen of the laptop 
                    end : 'top 100%',
                }
            }
        )
    }, [])

    return (
        <div className='min-h-screen min-w-full flex-wrap bg-white overflow-hidden'>
            <div className='min-h-screen min-w-full bg-black'></div>
            <div ref={containerRef} className='min-h-screen min-w-full bg-yellow-400 overflow-hidden flex justify-center items-center'>
                <div ref={textRef} className='min-h-screen min-w-full text-[20vw] text-nowrap flex justify-center items-center overflow-hidden pl-48 font-extrabold'>
                    Never Settle
                </div>
            </div>
            <div className='min-h-screen w-full bg-blue-600'></div>
            <div className='min-h-screen w-full bg-blue-600'></div>
            <div className='min-h-screen w-full bg-blue-600'></div>
            <div className='min-h-screen w-full bg-blue-600'></div>
        </div>
    )
}

export default Animate5
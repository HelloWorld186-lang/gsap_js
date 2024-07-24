//Animated text like previouse file

import React from 'react'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const Animate10 = () => {
    const containerRef = useRef()
    const textRef1 = useRef([])
    const textRef2 = useRef([])

    useEffect(() => {
        let text = containerRef.current.textContent
        let textArray = text.split('') 
        let textArrayLength = textArray.length
        let clutter = ""
        textArray.forEach((element, index) => {
            if(index < Math.floor(textArrayLength/2)){
                clutter += `<span class="first-half">${element}</span>`
            } else {
                clutter += `<span class="second-half">${element}</span>`
            }
        })
        containerRef.current.innerHTML = clutter

        textRef1.current = containerRef.current.querySelectorAll('.first-half')
        textRef2.current = containerRef.current.querySelectorAll('.second-half')

        gsap.fromTo(textRef1.current, 
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                ease: 'elastic',
            }
        )

        gsap.fromTo(textRef2.current, 
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: -0.5,
                ease: 'elastic',
            }
        )
    }, [])

    return (
        <div className='h-screen w-full flex justify-center items-center text-8xl bg-black text-white'>
            <div className='h-auto w-full py-10 flex justify-center items-center font-bold overflow-y-hidden' ref={containerRef}>
                Ayush
            </div>
        </div>
    )
}

export default Animate10
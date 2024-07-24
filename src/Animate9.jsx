import React from 'react'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const Animate9 = () => {
    const containerRef = useRef()

    useEffect(() => {
        let text = containerRef.current.textContent
        let textArray = text.split('') 
        let clutter = ""
        textArray.forEach((element) => {
            clutter += `<span>${element}</span>`
        })
        containerRef.current.innerHTML = clutter

        gsap.fromTo(containerRef.current.children, 
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
    }, [])

    return (
        <div className='h-screen w-full flex justify-center items-center text-8xl bg-black text-white'>
            <div className='h-auto w-full py-10 flex justify-center items-center font-bold overflow-y-hidden' ref={containerRef}>
                Ayush
            </div>
        </div>
    )
}

export default Animate9
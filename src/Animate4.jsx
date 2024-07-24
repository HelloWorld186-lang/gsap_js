import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Animate4 = () => {
    const boxRef = useRef()

    useEffect(() => {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top 70%',
                end: 'top 55%',
                // markers: true,
                scrub: true, // Optional: makes the animation scrub with scroll
                //scrube make it revertable according to the scroll 
                // scrube value means scrube : 2 means more smooth as comaor to the scrube : true
            }
        })

        tl.fromTo(boxRef.current, 
            {
                backgroundColor: 'white',
                opacity: 0,
                scale: 0.2,
            },
            {
                backgroundColor: 'black',
                opacity: 1,
                scale: 2,
                duration: 2,
                ease: 'power2.inOut',
                x : window.innerWidth / 2,
            }
        )
    }, [])

    return (
        <div className='h-auto w-full flex flex-wrap'>
            <div className='h-screen w-full bg-yellow-200 flex justify-center items-center'>
                <div className='h-auto w-auto p-3 bg-black text-yellow-400 text-4xl'>
                    No animation in this page
                </div>
            </div>
            <div className='h-screen w-full bg-orange-200 flex items-center'>
                <div className='h-auto w-auto p-3 text-orange-400 text-4xl' ref={boxRef}>
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Animate4
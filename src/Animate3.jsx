// Here , I am using the fromto instead of from , beacuse from is not working 

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Animate3 = () => {
    const logo = useRef(null)
    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const content = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(logo.current, 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power2.inOut' }
        )
        tl.fromTo([item1.current, item2.current, item3.current, item4.current], 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut', stagger: 0.5 }
        )
        tl.fromTo(content.current, 
            { opacity: 0, scale: 0.2 },
            { opacity: 1, scale: 1, duration: 2, ease: 'power2.inOut' }
        )
    }, [])

    return (
        <div className='min-h-screen w-full flex flex-col text-white bg-black'>
            <div className='h-24 w-full flex font-bold text-lg'>
                <div className='h-24 w-1/2 flex justify-center items-center' ref={logo}>
                    Devs100
                </div>
                <div className='h-24 w-1/2 flex space-x-10 items-center justify-end pr-10 '>
                    <span ref={item1}>About</span>
                    <span ref={item2}>Course</span>
                    <span ref={item3}>Contact</span>
                    <span ref={item4}>Terms & condition</span>
                </div>
            </div>
            <div className='flex-grow font-bold flex justify-center items-center text-4xl' ref={content}>
                Hello, Welcome to the 100 days of coding.
            </div>
        </div>
    )
}

export default Animate3
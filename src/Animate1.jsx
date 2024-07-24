import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const AnimatedBox = () => {
    const boxRef1 = useRef(null)
    const boxRef2 = useRef(null)
    const content = useRef(null)

    const width = window.innerWidth
    const height = window.innerHeight

    useEffect(() => {
        // Animate boxes to new positions
        gsap.to([boxRef1.current], {
            x: width / 2,
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scale: 2,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
        })

        gsap.to([boxRef2.current], {
            x: -(width / 2),
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scale: 2,
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
        })

        // Animate content upwards
        gsap.to(content.current, {
            y: -(height/2 - 50),
            delay: 1,
            duration: 2,
            ease: 'power2.inOut',
            stagger: 1,
            color: 'white',
        })

        // Return boxes to initial positions
        gsap.to([boxRef1.current], {
            x: 0,
            rotate: 0,
            scale: 1,
            borderRadius: 0,
            duration: 2,
            delay: 3, // Adjust this delay as needed
            ease: 'power2.inOut',
        })

        gsap.to([boxRef2.current], {
            x: 0,
            rotate: 0,
            scale: 1,
            borderRadius: 0,
            duration: 2,
            delay: 3, // Adjust this delay as needed
            ease: 'power2.inOut',
        })

        // Return content to initial position
        gsap.to(content.current, {
            y: 0,
            delay: 3, // Adjust this delay as needed
            duration: 2,
            ease: 'power2.inOut',
            stagger: 1,
        })
    }, [])

    return (
        <div className='h-screen w-full flex justify-center items-center relative'>
            <div ref={boxRef1} className='h-24 w-24 bg-red-400 absolute left-0'></div>
            <div ref={boxRef2} className='h-24 w-24 bg-blue-400 absolute right-0'></div>
            <div className='text-white text-2xl font-bold flex flex-col items-center absolute bottom-0' ref={content}>
                <h2>Hello!</h2>
                <h2>I am Ayush Chaurasia</h2>
                <h2>I am a student</h2>
            </div>
        </div>
    )
}

export default AnimatedBox
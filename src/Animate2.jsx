// Here I am using the time line here
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Animate2 = () => {
    const boxRef1 = useRef(null)
    const boxRef2 = useRef(null)

    const content1 = useRef(null)
    const content2 = useRef(null)
    const content3 = useRef(null)
    const content4 = useRef(null)

    const width = window.innerWidth
    const height = window.innerHeight

    useEffect(() => {
        // Animate boxes to new positions
        gsap.to(boxRef1.current, {
            x: width / 2,
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scale: 2,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
        })

        gsap.to(boxRef2.current, {
            x: -(width / 2),
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scale: 2,
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
        })

        // Animate content using timeline
        const tl = gsap.timeline({ delay: 1 })
        tl.to([content1.current, content2.current, content3.current , content4.current], {
            y: -(height/2 - 50),
            duration: 2,
            ease: 'power2.inOut',
            stagger: 0.5,
            opacity : 1,
            // color: 'white',
        })

        // Return boxes to initial positions
        gsap.to([boxRef1.current, boxRef2.current], {
            x: 0,
            rotate: 0,
            scale: 1,
            borderRadius: 0,
            duration: 2,
            delay: 4, // Adjust this delay as needed
            ease: 'power2.inOut',
        })

        // Return content to initial position using timeline
        const tlReturn = gsap.timeline({ delay: 4 }) // Adjust this delay as needed
        tlReturn.to([content1.current, content2.current, content3.current , content4.current], {
            y: 0,
            duration: 2,
            ease: 'power2.inOut',
            stagger: -0.5,
            opacity : 0,
        })
    }, [])

    return (
        <div className='h-screen w-full flex justify-center items-center relative'>
            <div ref={boxRef1} className='h-28 w-28 bg-red-400 absolute left-0'></div>
            <div ref={boxRef2} className='h-28 w-28 bg-blue-400 absolute right-0'></div>
            <div className='text-white text-2xl font-bold flex flex-col items-center absolute bottom-0'>
                <h2 ref={content1} className='opacity-0'>Hello!</h2>
                <h2 ref={content2} className='opacity-0'>I am Ayush Chaurasia</h2>
                <h2 ref={content3} className='opacity-0'>And, I am a Developer</h2>
                <h2 className='text-3xl opacity-0' ref={content4}>At <span className='text-[#4285F4]'>G</span><span className='text-[#34A853]'>o</span><span className='text-[#FBBC05]'>o</span><span className='text-[#4285F4]'>g</span><span className='text-[#34A853]'>l</span><span className='text-[#EA4335]'>e</span></h2>
            </div>
        </div>
    )
}

export default Animate2
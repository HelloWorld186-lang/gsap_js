//custome cursore 

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Animate7 = () => {
    const cursorRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to(cursorRef.current, {
                x: event.clientX,
                y: event.clientY,
                duration: 0,
            })
        }

        const handleImageEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.innerHTML = 'Hello!'
            }
        }

        const handleImageLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.innerHTML = ''
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        imageRef.current.addEventListener('mouseenter', handleImageEnter)
        imageRef.current.addEventListener('mouseleave', handleImageLeave)

        // Add cursor: none to the body
        document.body.style.cursor = 'none'

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            imageRef.current.removeEventListener('mouseenter', handleImageEnter)
            imageRef.current.removeEventListener('mouseleave', handleImageLeave)
            // Reset cursor style on cleanup
            document.body.style.cursor = 'default'
        }
    }, [])

    return (
        <div className='min-h-screen min-w-full relative cursor-none'>
            <div className='bg-red-400 w-8 h-8 rounded-full fixed text-white font-bold flex items-center justify-center pointer-events-none' ref={cursorRef}>
                
            </div>
            <div className='h-screen w-full flex justify-center items-center'>
                <a href="https://plus.unsplash.com/premium_photo-1683140811960-956e5bbf858e?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-1/2 w-auto shadow-lg shadow-gray-400 cursor-none'>
                    <img 
                        className='h-full w-full' 
                        src="https://plus.unsplash.com/premium_photo-1683140811960-956e5bbf858e?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Unsplash premium photo" 
                        ref={imageRef}
                    />
                </a>
            </div>
        </div>
    )
}

export default Animate7
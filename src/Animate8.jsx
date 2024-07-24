// Best nav bar for ever 

import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const Animate8 = () => {
  const optionRef = useRef()
  const option1Ref = useRef()
  const option2Ref = useRef()
  const option3Ref = useRef()
  const option4Ref = useRef()
  const option5Ref = useRef()
  const [timeline, setTimeline] = useState(null)

  useEffect(() => {
    const tl = gsap.timeline({ paused: true })
    tl.fromTo(optionRef.current, 
      { right: '-100%' },
      { right: '0', duration: 0.5, ease: 'power2.out' }
    )
    tl.fromTo([option1Ref.current, option2Ref.current, option3Ref.current, option4Ref.current, option5Ref.current],
      { x: '100%', opacity: 0 },
      { x: '0', opacity: 1, duration: 0.3, ease: 'power2.out', stagger: 0.1 }
    )
    setTimeline(tl)
  }, [])

  const handleClick1 = () => {
    timeline.play()
  }

  const handleClick2 = () => {
    timeline.reverse()
  }

  return (
    <div className='h-screen w-full overflow-hidden flex relative'>
      <div className='h-screen w-full shrink-0'>
        <div className='h-24 w-full flex justify-between items-center px-4 sm:px-10'>
          <div className='text-xl sm:text-2xl font-bold'>Logo</div>
          <div className='font-bold hover:bg-gray-100 p-2 rounded-full cursor-pointer hover:scale-105' onClick={handleClick1}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className='h-full w-[60%] sm:w-1/3 flex-col space-y-3 bg-gray-100 pt-9 px-3 text-lg shrink-0 absolute top-0 right-0' ref={optionRef}>
        <div className='w-full h-8 flex items-center' ref={option1Ref}>
          <button className='hover:bg-gray-200 p-2 rounded-full' onClick={handleClick2}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className='w-full h-8 flex items-center hover:underline hover:underline-offset-2 transform duration-150 cursor-pointer delay-150' ref={option2Ref}>Home</div>
        <div className='w-full h-8 flex items-center hover:underline hover:underline-offset-2 transform duration-150 cursor-pointer delay-150' ref={option3Ref}>About</div>
        <div className='w-full h-8 flex items-center hover:underline hover:underline-offset-2 transform duration-150 cursor-pointer delay-150' ref={option4Ref}>Contact</div>
        <div className='w-full h-8 flex items-center hover:underline hover:underline-offset-2 transform duration-150 cursor-pointer delay-150' ref={option5Ref}>Terms and conditions</div>
      </div>
    </div>
  )
}

export default Animate8
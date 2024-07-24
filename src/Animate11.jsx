//complete project using timeline and scrole trigger 

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animate11 = () => {
  const logoRef = useRef();
  const optionRef = useRef();
  const bigLeftBoxRef = useRef();
  const bigRightBoxRef = useRef();
  const rowRef = useRef();

  const section2Ref = useRef();

  const row2Ref = useRef();

  const box1LeftRef = useRef();
  const box2RightRef = useRef();
  const box3LeftRef = useRef();
  const box4RightRef = useRef();

  useEffect(() => {
    const tl1 = gsap.timeline();

    // Logo and nav options
    tl1.fromTo(logoRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    tl1.fromTo(optionRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    );

    // Big boxes
    tl1.fromTo(bigLeftBoxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      'samebigbox' //same name means same time happen , we cna also write the (-=5) to make a delay of 5 seconds
    );

    tl1.fromTo(bigRightBoxRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      'samebigbox'
    );

    // Row boxes
    tl1.fromTo(rowRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 }
    );

    // Section 2 animations
    gsap.fromTo(row2Ref.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
        }
      }
    );

    gsap.fromTo(box1LeftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
        }
      }
    );

    gsap.fromTo(box2RightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
        }
      }
    );

    gsap.fromTo(box3LeftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 40%',
          end: 'top 20%',
          scrub: true,
        }
      }
    );

    gsap.fromTo(box4RightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 40%',
          end: 'top 20%',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className='min-h-screen w-full overflow-hidden flex-wrap'>
        {/* section1 means page1 */}
      <section>
        <div className='h-screen w-full flex-wrap p-5'>
          <div className='h-[10%] w-full'>
            <nav className='h-full w-full flex'>
              <div className='h-full w-[30%] flex justify-center items-center' ref={logoRef}>Lorem</div>
              <div className='h-full w-[70%]'>
                <ul className='h-full w-full flex justify-evenly items-center list-none' ref={optionRef}>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>
                    <button className='border-2 rounded-lg px-5 py-2 border-black'>Lorem</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='h-[70%] w-full flex justify-center items-center'>
            <div className='h-full w-1/2 flex justify-center items-center' ref={bigLeftBoxRef}>
              <div className='h-[80%] w-[80%] bg-black rounded-lg'></div>
            </div>
            <div className='h-full w-1/2 flex justify-center items-center'>
              <div className='h-[80%] w-[80%] bg-black rounded-lg' ref={bigRightBoxRef}></div>
            </div>
          </div>
          <div className='h-[20%] w-full flex' ref={rowRef}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className='h-full w-1/5 flex justify-center items-center'>
                <div className='h-[80%] w-[80%] bg-black rounded-lg'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section2 means page2 */}
      <section ref={section2Ref}>
        <div className='h-screen w-full flex-wrap p-5'>
            <div className='h-[20%] w-full flex justify-between' ref={row2Ref}>
                <div className='h-[50%] w-[20%]  bg-black rounded-lg'></div>
                <div className='h-[50%] w-[70%]  bg-black rounded-lg'></div>
            </div>
            <div className='h-[80%] w-full flex-col justify-evenly'>
                <div className='h-[40%] w-full flex justify-center items-center'>
                    <div className='h-full w-1/2 flex justify-center items-center' ref={box1LeftRef}>
                        <div className='h-[80%] w-[80%] bg-black rounded-lg'></div>
                    </div>
                    <div className='h-full w-1/2 flex justify-center items-center'>
                        <div className='h-[80%] w-[80%] bg-black rounded-lg' ref={box2RightRef}></div>
                    </div>
                </div>
                <div className='h-[40%] w-full flex justify-center items-center'>
                    <div className='h-full w-1/2 flex justify-center items-center' ref={box3LeftRef}>
                        <div className='h-[80%] w-[80%] bg-black rounded-lg'></div>
                    </div>
                    <div className='h-full w-1/2 flex justify-center items-center'>
                        <div className='h-[80%] w-[80%] bg-black rounded-lg' ref={box4RightRef}></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Animate11;
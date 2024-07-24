// in this , we use the usegsap in the place of the useeffect (they are very similar to each other)

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const AnimatedComponent = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      ease: 'bounce.out'
    });
  }, { scope: boxRef } , []); // in the [] write all the dependecy here 

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-500 flex items-center justify-center text-white font-bold"
      >
        GSAP Box
      </div>
    </div>
  );
};

export default AnimatedComponent;
import React, { useState } from 'react';
import one from '../assets/chooseus/4.jpg';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const Choose = () => {
  const [visible, setVisible] = useState(false); 
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 50% of the component is visible
    triggerOnce: true // Only trigger once
  }); 

  return (
    <ScrollTrigger onEnter={()=>setVisible(true)} onExit={()=>setVisible(true)}>
      <div className='bg-cover bg-top w-full h-screen ' style={{ backgroundImage: `url(${one})` }}>
        <div className='bg-black bg-opacity-70 w-full h-full flex flex-col justify-start  gap-6'>          
                           
            <motion.h2 
             ref={ref}
             initial={{ opacity: 0, y: -50 }}
             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
             transition={{ duration: 1, ease: 'easeOut',delay:1 }}
            className='text-2xl md:text-5xl pt-10 text-center' id='title'>Why choose us ?</motion.h2>
          {visible && <div className=' mx-10 pt-20 grid grid-cols-2 justify-center gap-y-20'>
            <div className='flex  justify-center flex-col items-center gap-3'>
            <p className='text-3xl lg:text-6xl text-white'><CountUp start={5} end={200} duration={6} delay={1} />+</p>
            <h3 className='text-2xl lg:text-4xl  text-[#42E6CA] font-bold '>Members</h3>    
            </div>  
            <div className='flex  justify-center flex-col items-center'>
            <p className='text-3xl lg:text-6xl text-white'><CountUp start={5} end={35} duration={7} delay={1} />+</p>
            <h3 className='text-2xl lg:text-4xl   text-[#42E6CA]  font-bold '>Trainers</h3>    
            </div>   
            <div className='flex  justify-center flex-col items-center'>
            <p className='text-3xl lg:text-6xl text-white'><CountUp start={5} end={20} duration={7} delay={1} />+</p>
            <h3 className='text-2xl lg:text-4xl   text-[#42E6CA]  font-bold '>Awards</h3>    
            </div>   
            <div className='flex  justify-center flex-col items-center'>
            <p className='text-3xl lg:text-6xl text-white'><CountUp start={5} end={15} duration={7} delay={1} />+</p>
            <h3 className='text-2xl lg:text-4xl   text-[#42E6CA]  font-bold '>Programs</h3>    
            </div>   
           
            </div>}                       
          
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Choose;

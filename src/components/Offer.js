import React from 'react';
import one from '../assets/offer/2.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Offer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Function to split text into spans for each letter
  const splitTextIntoSpans = (text) =>
    text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }} >
        {char}
      </motion.span>
    ));

  return (
    <div className='bg-cover bg-top w-full h-screen ' style={{ backgroundImage: `url(${one})` }}>
      <div className='bg-black bg-opacity-50 w-full h-full flex flex-col justify-center pl-10 gap-6'>
        <motion.h4
        initial={{ opacity: 0, y: -500 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -500 }}  
        transition={{ duration: 1, ease: 'easeOut', delay:0.5 ,type:'spring',bounce:0.7,stiffness:600}}    
        className='text-xl md:text-3xl text-white tracking-widest font-bold'>
          <span 
              
          className='font-medium text-2xl md:text-4xl tracking-normal' id='title'>
            Exclusive
          </span> Gym Deal!
        </motion.h4>
        <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold capitalize leading-normal bg-gradient-to-r from-orange-200 to-[#FA4371] bg-clip-text text-transparent w-[90%] lg:w-[70%] xl:w-[60%] lg:leading-normal xl:leading-normal">
          {splitTextIntoSpans('Join today and save 50% off on your first month!')}
        </h2>
        <motion.button
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut', delay:5 }}       
          className='border-2 border-t-orange-300 border-r-red-500 border-l-orange-300
            border-b-red-500 text-white w-fit p-3 text-xs md:text-xl duration-300'>
          Claim your spot
        </motion.button>
      </div>
    </div>
  );
};

export default Offer;

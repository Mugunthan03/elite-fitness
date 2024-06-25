import React from 'react'
import gym from '../assets/banner images/banner.jpg';
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <div className='bg-cover bg-top w-full h-screen' style={{ backgroundImage: `url(${gym})`  }}>
      <div className='bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center gap-10'>
        <motion.h4 
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:2,ease:'easeOut',delay:0.3,type:'spring',bounce:0.5}}
        className='text-white text-3xl md:text-5xl xl:text-7xl font-bold' id='title'>Challenge yourself</motion.h4>

        <motion.h2 
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:2,ease:'easeOut',delay:0.7,stiffness:900}}
        className='text-white text-4xl md:text-6xl xl:text-8xl font-extrabold text-shadow-orange '>Transform together</motion.h2>

        <motion.button 
        initial={{scale:0}}
        animate={{scale:1.1}}
        transition={{duration:1,delay:1,ease:'easeOut'}}    
        className='border relative font-bold bg-orange-200 border-orange-100 p-2 text-sm md:text-xl '>Join Now
          <span className='absolute border-2 -inset-3  hover:-inset-2 transition-all duration-200 ease-out '></span></motion.button>        
      </div>
    </div>
    
  )
}

export default Banner
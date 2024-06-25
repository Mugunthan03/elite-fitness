import React, { useState } from 'react';
import one from '../assets/w.png';
import two from '../assets/banner3.jpg';
import offer from '../assets/50.png';
import { motion } from 'framer-motion';

const plansData = [
  {
    title: 'Basic',
    price: '1999 / month',
    features: ['Access to basic equipment', 'Weekly fitness workshops', 'Nutritional guidance'],
  },
  {
    title: 'Standard',
    price: '2999 / month',
    features: ['Access to advanced equipment', 'Personal trainer', 'Personalized workout plans'],
  },
  {
    title: 'Premium',
    price: '3999 / month',
    features: ['Unlimited gym access', 'Personal trainer', 'Unlimited Group classes', 'Access to premium gym amenities'],
  },
];

const Plans = () => {
  const [active, setActive] = useState(1);

  const handlePlanClick = (index) => {
    setActive(index);
  };

  return (
    <div className='bg-[#151515] w-full min-h-screen flex flex-col justify-center'>
      <div className='w-full h-48 relative'>
        <img src={two} alt='normal' className='w-full h-full object-cover opacity-15' />
        <motion.h1
         initial={{ y: -100,opacity:0 }}
         animate={{ y: 0 ,opacity:1}}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className='absolute tracking-wider text-2xl md:text-4xl w-full text-center bottom-5' id='title'>Plans</motion.h1>
      </div>
      
      <div className='grid grid-cols-1 mt-10 mb-20 lg:grid-cols-3  gap-x-7 gap-y-16 xl:gap-x-24 mx-10 md:mx-20'>
        {plansData.map((plan, index) => (
          <motion.div
            key={index}
            className={`${active === index ? 'border-2 bg-[#131316]  transform scale-110 transition-all duration-300 ' : 'bg-[#EBEBEE]'} p-8 relative rounded-md`}
            onClick={() => handlePlanClick(index)}          
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 10,
              delay: index * 0.5, 
              duration:0.5
            }}
          >
            <div className='absolute right-3'>
              <img src={offer} className='w-10 animate-bounce' alt='offer' />
            </div>
            <div className='flex flex-col gap-6 justify-between h-full transform skew-y-0'>
              <motion.h2
                className={`text-base lg:text-xl w-fit mx-auto px-4 py-1 rounded-sm ${active === index ? 'bg-white text-black' : 'bg-black text-white'}`}
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.3 + 0.3, duration: 0.5, type: 'spring' }} // Adjusting delay for title animation
              >
                {plan.title}
              </motion.h2>
              <motion.h2
                className={`text-2xl md:text-4xl lg:text-2xl xl:text-4xl text-center font-extrabold ${active === index ? 'text-gray-300' : 'text-black'}`}
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.3 + 0.6, duration: 0.5, type: 'spring' }} // Adjusting delay for price animation
              >
                {plan.price}
              </motion.h2>
              {plan.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className='flex gap-5 items-center'
                  initial={{ y: -20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.3 + 0.9 + i * 0.3, duration: 0.5, type: 'spring' }} // Adjusting delay for features animation
                >
                  <img src={one} alt='dumbell' className='w-6' />
                  <p className='text-gray-500 text-base md:text-lg lg:text-sm xl:text-xl font-semibold'>{feature}</p>
                </motion.div>
              ))}
              <motion.button
                className={`text-base md:text-xl p-3 rounded-md font-mono font-bold ${active === index ? 'bg-white text-black' : 'bg-black text-white'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.3 + 1.5, duration: 0.5, type: 'spring' }} // Adjusting delay for button animation
              >
                Join now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

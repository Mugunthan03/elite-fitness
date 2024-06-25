import React, { useState } from 'react';
import one from '../assets/banner3.jpg';
import { categories, equipmentImages, allImages } from './data';
import { useCart } from '../context/cartContext';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const gridContainer = {
  hidden: { opacity: 0 },
  show: {opacity: 1,
 transition: {staggerChildren: 0.7, ease: "easeOut"}, },
};

const squareContainer = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {opacity: 1,scale: 1,transition: {type: "spring", stiffness:600, damping: 10, bounce: 1 }, },
  };

const Gears = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true 
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();


  const displayImages = selectedCategory === 'all' ? allImages : equipmentImages[selectedCategory] || [];

  return (
    <div className='w-full min-h-screen bg-[#131316]'>
      <div className='w-full h-48 relative '>
        <img src={one} alt='normal' className='w-full h-full object-cover opacity-15' />
        <motion.h1
         initial={{ y: -100,opacity:0 }}
         animate={{ y: 0 ,opacity:1}}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className='absolute tracking-wider text-2xl md:text-4xl w-full text-center bottom-5' id='title'>Gym Gears </motion.h1>       
      </div>

      <div className='pt-3'>
        <div className='text-white flex justify-center gap-x-5 gap-y-5 mt-10 mx-8 flex-wrap '>
          {categories.map((category) => (
            <button key={category.id}
              className={`${
                selectedCategory === category.id ? 'bg-orange-300 text-black' : 'bg-gray-800'
              } text-xs lg:text-base px-5 py-2 rounded `}
              onClick={() => setSelectedCategory(category.id)} >{category.name}{' '}
            </button>          
            
          ))}
        </div>

        <motion.div
         variants={gridContainer}
         initial="hidden"
         animate={inView ? "show" : "hidden"}
         ref={ref}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-10 gap-x-10 gap-y-14 pb-10 mx-8 lg:mx-16 xl:mx-20'>

          {displayImages.map((product) => (
            <motion.div 
            variants={squareContainer}
            whileHover={{ scale: 1.05 }}
            key={product.id} className='w-full flex flex-col gap-5'>
              <div className='w-full lg:w-72 xl:w-96 h-56 overflow-hidden'>
                <img  src={product.src}  alt={product.alt} loading='lazy'  className='w-full h-full object-fill rounded-md
                 opacity-85'     />
                  </div> 
                  <div className='flex justify-between xl:mr-12'>
                <div className='flex flex-col gap-2 w-[70%]'>
                  <h2 className='text-gray-300 capitalize text-sm '>{product.name}</h2>
                  <p className='text-white text-xm md:text-lg font-bold'>₹ {product.price}</p>
                </div>
                <div className=''>
                  <button
                    onClick={() => addToCart(product)}
                    className='border-2 border-orange-300 text-white text-xs md:text-sm  hover:bg-orange-300 hover:text-black p-2 transition-all duration-200 rounded mt-2 font-mono font-semibold tracking-wide'> Buy Now                 
                  </button>
                </div>
              </div>                                                   
            
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gears;

import React from 'react';
import one from '../assets/banner3.jpg';
import { useCart } from '../context/cartContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.7, ease: 'easeOut' },
  },
};

const squareContainer = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type:'tween', stiffness: 600, damping: 10, bounce: 1 },
  },
};

const Nutrients = () => {
  const { addToCart } = useCart();

  const nutrientsData = [
    {
      id: 18,
      name: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
      src:
        'https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg',
      alt: 'super',
      price: 4499,
    },
    {
      id: 19,
      name: 'MuscleBlaze Super Gainer XXL Weight Gainer, 3 kg (6.6 lb), Chocolate',
      src:
        'https://img10.hkrtcdn.com/32514/prd_3251359-MuscleBlaze-Super-Gainer-XXL-Weight-Gainer-6.6-lb-Chocolate_o.jpg',
      alt: 'super',
      price: 2599,
    },
    {
      id: 20,
      name: 'MuscleBlaze Whey Gold 100% Whey Protein Isolate, 2 kg (4.4 lb), Rich Milk Chocolate',
      src:
        'https://img8.hkrtcdn.com/33315/prd_3331407-MuscleBlaze-Whey-Gold-100-Whey-Protein-Isolate-4.4-lb-Rich-Milk-Chocolate_o.jpg',
      alt: 'super',
      price: 6499,
    },
    {
      id: 21,
      name: 'MB Fuel One Whey Protein, 2 kg (4.4 lb), Chocolate',
      src:
        'https://img3.hkrtcdn.com/27461/prd_2746072-MB-Fuel-One-Whey-Protein-Immunity-4.4-lb-Chocolate_o.jpg',
      alt: 'super',
      price: 3849,
    },
    {
      id: 22,
      name: 'MuscleBlaze Biozyme Performance Whey, 4 kg (8.8 lb), Rich Chocolate',
      src:
        'https://img5.hkrtcdn.com/27294/prd_2729354-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_o.jpg',
      alt: 'super',
      price: 8599,
    },
    {
      id: 23,
      name: 'MuscleBlaze Super Gainer XXL Weight Gainer, 5 kg (11 lb), Banana',
      src:
        'https://img6.hkrtcdn.com/12993/prd_1299255-MuscleBlaze-Super-Gainer-XXL-Weight-Gainer-11-lb-Banana_o.jpg',
      alt: 'super',
      price: 3999,
    },
    {
      id: 24,
      name: 'bGREEN Plant Protein, 1 kg (2.2 lb), Cafe Mocha',
      src: 'https://img6.hkrtcdn.com/31073/prd_3107225-bGREEN-Plant-Protein-Cafe-Mocha-2.2-lb_o.jpg',
      alt: 'super',
      price: 2299,
    },
    {
      id: 25,
      name: 'MuscleBlaze Biozyme Whey PR 1 kg Molten Chocolate Cake & Shaker Combo',
      src: 'https://img2.hkrtcdn.com/34108/pck_3410791_o.jpg',
      alt: 'super',
      price: 2499,
    },
    {
      id: 26,
      name: 'MuscleBlaze Biozyme Clear Whey Isolate, 540 g (1.19 lb), Icy Orange',
      src:
        'https://img6.hkrtcdn.com/33842/prd_3384165-MuscleBlaze-Biozyme-Clear-Whey-Isolate-1.2-lb-Icy-Orange_o.jpg',
      alt: 'super',
      price: 1899,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-full min-h-screen bg-[#131316]">
      <div className="w-full h-48 relative">
        <img src={one} alt="normal" className="w-full h-full object-cover opacity-15" />
        <motion.h1
        initial={{ y: -100,opacity:0 }}
        animate={{ y: 0 ,opacity:1}}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className="absolute tracking-wider text-2xl md:text-4xl w-full text-center bottom-5" id="title">
          Nutrients & Supplements
        </motion.h1>
      </div>
      <div className="pt-10">
        <motion.div
          variants={gridContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-10 gap-x-10 gap-y-14 pb-10 mx-8 lg:mx-16 xl:mx-20"
        >
          {nutrientsData.map((product) => (
            <motion.div
              key={product.id}
              variants={squareContainer}
              whileHover={{ scale: 1.05 }}
              className="w-full flex flex-col gap-5"
            >
              <div className="w-full lg:w-72 xl:w-96 h-80 overflow-hidden">
                <img
                  src={product.src}
                  alt={product.alt}
                  loading="lazy"
                  className="w-full h-full object-fill rounded-md opacity-85"
                />
              </div>
              <div className="flex justify-between items-center mt-2 xl:mr-11">
                <div className="flex flex-col gap-2 w-[70%]">
                  <h2 className="text-gray-300 capitalize text-sm">{product.name}</h2>
                  <p className="text-white text-xm md:text-lg font-bold">₹ {product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="border-2 border-orange-300 text-white text-xs md:text-sm hover:bg-orange-300 hover:text-black p-2 transition-all duration-200 rounded mt-2 font-mono font-semibold tracking-wide"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Nutrients;

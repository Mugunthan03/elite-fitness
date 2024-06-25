import React from "react";
import bike from "../assets/features/bike.png";
import gym from "../assets/features/gym.png";
import cardio from "../assets/features/cardio.png";
import nutrient from "../assets/features/nutrient.png";
import weight from "../assets/features/weight.png";
import muscle from "../assets/features/muscle.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const features = [
  {
    img: bike,
    title: "modern equipments",
    description: "Elevate your fitness journey with cutting-edge equipment tailored for modern lifestyles, ensuring optimal performance and results",
  },
  {
    img: gym,
    title: "professional trainers",
    description: "Reach your peak performance with our expert trainers, providing tailored guidance and motivation every step of the way",
  },
  {
    img: cardio,
    title: "cardio exercises",
    description: "Elevate your heart rate and redefine your limits with our dynamic cardio workouts, designed to boost endurance and ignite your inner strength",
  },
  {
    img: nutrient,
    title: "healthy nutrients",
    description:"Unlock the power of balanced nutrition with our customized nutrient plans, empowering you to fuel your body for peak performance and vitality.",
  },
  {
    img: weight,
    title: "weight lifting",
    description:"Experience the transformative benefits of weight lifting, sculpting your physique and building strength with our expert guidance and tailored programs",
  },
  {
    img: muscle,
    title: "flex your muscles",
    description: "Unleash the power within as you sculpt and define your muscles with our targeted flex workouts, unlocking strength and confidence with each repetition",
  },
];

const gridContainer = {
  hidden: { opacity: 0 },
  show: {opacity: 1,
 transition: {staggerChildren: 0.6, ease: "easeOut"}, },
};

const squareContainer = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {opacity: 1,scale: 1,transition: {type: "spring", stiffness:600, damping: 10, bounce: 2 }, },
  };

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true 
  });

  return (
    <div className="bg-[#131316] w-full h-full pt-5 pb-10 text-white">
      <div className="flex flex-col justify-center items-center h-full gap-5 pt-10 pb-10 mx-10 md:mx-20">
        <motion.h3 
        ref={ref}
         initial={{opacity:0,x:-50}}
         animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
         transition={{duration:1,ease:'easeOut',delay:0.2,type:'spring',bounce:0.5}}
        className="text-3xl lg:text-5xl font-semibold tracking-widest">
          Our Features
        </motion.h3>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-32 gap-y-10 pt-10 w-full"
          ref={ref} >
       
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={squareContainer}
              whileHover={{ scale: 1.05 }}
              className="w-full flex justify-center items-center flex-col gap-3 border rounded-br-3xl rounded-tl-3xl border-orange-300 p-4">
            
              <img src={feature.img} alt={feature.title} className="hover:scale-105" />
              <p className="text-lg font-bold capitalize text-orange-200">
                {feature.title}
              </p>
              <p className="text-base font-medium text-gray-500  transition-all duration-200 mx-5">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

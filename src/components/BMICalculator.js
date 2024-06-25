import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BMICalculator = () => {
  const { ref: bmiRef, inView: bmiInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');
  const [msg, setMsg] = useState('');

  const calculate = () => {
    if (weight && height) {
      setMsg('');
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setResult('underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setResult('normal');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setResult('overweight');
      } else {
        setResult('obesity');
      }
      setHeight('');
      setWeight('');
    } else {
      setMsg('Enter valid height and weight');
    }
  };

  return (
    <div className='bg-[#131316] w-full h-full text-white pt-32 pb-32'>
      <div className='flex mx-5 md:mx-20 gap-10 flex-wrap'>
        <motion.div
          ref={bmiRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className='w-full lg:w-[40%] relative'
        >
          <div className='bg-gray-800 w-full h-full flex flex-col gap-3 rounded-lg pb-5'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
              className='text-base md:text-lg text-orange-300 font-bold mt-5 text-center'
            >
              BMI Chart
            </motion.div>
            <div className='mt-4 flex flex-col gap-5 mx-5 xl:mx-20'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={bmiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
                className='flex justify-between text-gray-400 text-base md:text-lg'
              >
                <p>Below 18.5</p>
                <p>Underweight</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={bmiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 1.1 }}
                className='flex justify-between text-gray-400 text-base md:text-lg'
              >
                <p>18.5 - 24.9</p>
                <p>Normal</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={bmiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
                className='flex justify-between text-gray-400 text-base md:text-lg'
              >
                <p>25 - 29.9</p>
                <p>Overweight</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={bmiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
                className='flex justify-between text-gray-400 text-base md:text-lg'
              >
                <p>30 and Above</p>
                <p>Obesity</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={bmiRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          className='w-full lg:w-[50%] flex flex-col gap-5 mx-5'
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
            className='text-lg md:text-2xl lg:text-4xl font-extrabold pt-2'
          >
            Let's calculate your BMI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.1 }}
            className='capitalize text-sm lg:text-base text-gray-400'
          >
            Easily determine your body mass index with our accurate calculation tool.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
            className='flex gap-5 flex-wrap lg:flex-nowrap'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={bmiInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
            >
              <input
                className='border-2 border-gray-400 p-2 md:p-3 bg-transparent mb-3'
                value={weight}
                required
                onChange={(e) => setWeight(e.target.value)}
                placeholder='Weight (kg)'
              />
              <p className='text-sm md:text-base'>Your BMI is: <span className='text-orange-300 text-base md:text-lg font-semibold'>{bmi}</span></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={bmiInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.7 }}
            >
              <input
                className='border-2 border-gray-400 p-2 md:p-3 bg-transparent mb-3'
                value={height}
                required
                onChange={(e) => setHeight(e.target.value)}
                placeholder='Height (cm)'
              />
              <p className='text-sm md:text-base'>Your Weight is: <span className='text-orange-300 text-base md:text-lg font-semibold'>{result}</span></p>
            </motion.div>
          </motion.div>
          <p className='text-orange-300 capitalize'>{msg}</p>       
                
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={bmiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
            className='w-fit bg-orange-200 font-semibold text-sm md:text-lg text-black px-3 py-2'
            onClick={calculate}
          >
            Calculate
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BMICalculator;

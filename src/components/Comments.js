import React, { useState, useEffect } from 'react';
import comment1 from '../assets/comments/comment1.jpg';
import comment2 from '../assets/comments/comment2.jpg';
import comment3 from '../assets/comments/comment3.jpg';
import one from '../assets/comments/blackbg.jpg';

const Comments = () => {
  const commentsData = [
    {
      image: comment1,
      name: '- Mike',
      comment: 'Outstanding gym facilities! From state-of-the-art equipment to knowledgeable trainers, this gym has it all. Ive seen remarkable results in my fitness journey since joining.',
    },
    {
      image: comment2,
      name: '- John',
      comment: 'The atmosphere at this gym is unbeatable. Its not just about working out its about being part of a supportive community that motivates you to push your limits and achieve your goals.',
    },
    {
      image: comment3,
      name: '- Emily',
      comment: 'Step into our gym and experience excellence in fitness. From top-notch equipment to expert trainers, were dedicated to helping you achieve your fitness goals with passion and precision.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [commentsData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='bg-cover bg-top w-full h-screen flex flex-col justify-evenly' style={{ backgroundImage: `url(${one})` }}>
      <h1 className='text-xl md:text-3xl font-bold tracking-wide capitalize text-white text-center p-10'>Our clients testimonials</h1>
      <div className='flex flex-col md:flex-row gap-1 pb-5 pt-5 lg:gap-10 border-2 sh border-gray-100 md:p-5 text-white mx-16 md:mx-18 lg:mx-20'>
        <img src={commentsData[currentIndex].image} className='w-[50%] md:w-[30%] lg:w-[20%] mx-10 md:mx-1 rounded-lg' alt='user' loading='lazy' />
        <div className='flex flex-col gap-3'>
          <p className='text-xs md:text-base xl:text-2xl p-5 tracking-widest leading-loose font-normal italic'>{commentsData[currentIndex].comment}</p>
          <h2 className='text-xs md:text-lg lg:text-xl px-5 font-extrabold'>{commentsData[currentIndex].name}</h2>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        {commentsData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-orange-300'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

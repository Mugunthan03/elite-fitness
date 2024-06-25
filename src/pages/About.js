import React from 'react';
import Comments from '../components/Comments.js';
import one from '../assets/banner3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import trainer1 from '../assets/trainers/trainer1.jpg';
import trainer2 from '../assets/trainers/trainer2.jpg';
import trainer4 from '../assets/trainers/trainer4.jpg';
import trainer5 from '../assets/trainers/trainer5.jpg';
import trainer6 from '../assets/trainers/trainer6.jpg';
import gym1 from '../assets/gym gallery/gym1.jpg';
import gym2 from '../assets/gym gallery/gym2.jpg';
import gym3 from '../assets/gym gallery/gym3.jpg';
import gym4 from '../assets/gym gallery/gym4.jpg';
import gym5 from '../assets/gym gallery/gym5.jpg';
import gym6 from '../assets/gym gallery/gym6.jpg';
import { motion } from 'framer-motion';

const About = () => {
 
  const trainers = [trainer1, trainer2, trainer4, trainer5, trainer6];
  const galleryImages = [gym1, gym2, gym3, gym4, gym5, gym6];

  return (
    <div className='w-full min-h-screen bg-[#131316]'>
      <div className='w-full h-48 relative'>
        <img src={one} alt='normal' className='w-full h-full object-cover opacity-10' />
        <motion.h1
        initial={{ y: -100,opacity:0 }}
        animate={{ y: 0 ,opacity:1}}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className='absolute tracking-wider text-2xl md:text-4xl w-full text-center bottom-5' id='title'>
          About
        </motion.h1>
      </div>
      <div className='pt-5 mx-10 lg:mx-20'>
        <div>
          <h1 className='text-white pt-3 text-xl font-bold text-center'>Gym gallery</h1>
          <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type:'spring',bounce:0.5}}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7'
          >
            {galleryImages.map((imageUrl, index) => (
              <motion.div
                key={index}                             
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 600, damping: 50, bounce: 0.8, delay: index * 0.6, duration: 2 }}
                className='w-full h-60'
              >
                <img
                  src={imageUrl}
                  alt='gym gallery'
                  loading='lazy'
                  className='w-full h-full rounded-md object-cover hover:scale-105 transition-all duration-200 opacity-85 hover:opacity-100'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='mt-10'>
          <h1 className='text-white pt-10 text-xl font-bold text-center'>Our Expert Trainers</h1>

          <div className='mx-5 lg:mx-20 mt-10 pb-20'>
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              effect='coverflow'
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1} 
              spaceBetween={30}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // Adjust slidesPerView for different screen sizes
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {trainers.map((trainer, index) => (
                <SwiperSlide key={index}>
                  <img src={trainer} alt='trainers' loading='lazy' className='w-full rounded-md h-full object-cover opacity-95' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default About;

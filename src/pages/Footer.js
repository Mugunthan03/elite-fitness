import React from 'react'
import { FaFacebook , FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import gym from '../assets/footer/banner4.jpg'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-cover w-full h-full pb-10'  style={{ backgroundImage: `url(${gym})` }}  >
        <div className='mx-7 lg:mx-20 pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='text-white flex flex-col justify-between gap-5'>
            <img src={logo} alt="footer logo" className='w-36' />
            <p className='text-sm md:text-base lg:text-lg text-gray-400 hover:text-orange-300'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <div className='flex gap-10'>
                <p><FaFacebook size={26} className='text-gray-300 hover:text-orange-300'/></p>
                <p><IoLogoInstagram size={26} className='text-gray-300 hover:text-orange-300'/></p>
                <p><FaTwitter size={26} className='text-gray-300 hover:text-orange-300'/></p>
                <p><MdOutlineEmail size={26} className='text-gray-300 hover:text-orange-300'/></p>
            </div>
            <p className='text-gray-400 text-sm md:text-base hover:text-orange-300'>Copyright © 2024 All rights reserved </p>
          </div>

          <div className='text-white flex  lg:justify-center'>
            
            <div className='flex flex-col gap-5'>
                
          
            <h2 className='text-lg  text-white font-bold capitalize '>quick Links</h2>
            <div className='flex gap-10 mt-2 capitalize text-base cursor-pointer'>
                <div className='flex flex-col gap-5 '>
                <Link smooth duration={500} to="/"><p className='text-gray-300 hover:text-orange-300'>Home</p></Link>
                <Link smooth duration={500} to="/about"><p className='text-gray-300 hover:text-orange-300'>About</p></Link>
                <Link smooth duration={500} to="/plans"><p className='text-gray-300 hover:text-orange-300'>Plans</p></Link>
             
                </div>
                <div className='flex flex-col gap-5'>
                <Link smooth duration={500} to="/gears"><p className='text-gray-300 hover:text-orange-300'>Gym gears</p></Link>
                <Link smooth duration={500} to="/nutrients"><p className='text-gray-300 hover:text-orange-300'>Nutrients</p></Link>
             

                </div>
               
            </div>         
            
            <div>
            <h2 className='text-lg  text-white font-bold capitalize '>support</h2>
            <Link smooth duration={500} to="/contact"> <p className='text-base mt-3 cursor-pointer hover:text-orange-300'>contact us</p></Link>
               
            </div>
          </div>
          </div>
          <div className='text-white'>
          <h2 className='text-lg  text-white font-bold capitalize '>working hours</h2>
          <div className='flex flex-col justify-between gap-5 mt-3'>
          <p className=' text-sm md:text-lg '>Monday-friday :</p>
          <p className='text-gray-300 text-sm lg:text-base hover:text-orange-300'>7.00 am - 9.00 pm</p>
          <p className='text-sm md:text-lg '>Saturday :</p>
          <p className='text-gray-300  text-sm lg:text-base hover:text-orange-300'>6.00 am- 10.00 pm</p> 
          <p className=' text-sm md:text-lg   '>Sunday - Closed</p>

          </div>
            
          </div>
        </div>
        </div>
        <hr class="h-0.5 bg-gray-600 my-5 mx-5 lg:mx-20 " />
        <h2 className='text-gray-300 text-sm lg:text-base text-center tracking-wider '> Designed  ❤️ By <span className='font-bold text-orange-600'>Mugunthan</span> </h2>


    </div>
  )
}

export default Footer
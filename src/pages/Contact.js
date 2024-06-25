import React from "react";
import { motion } from "framer-motion";
import one from "../assets/banner3.jpg";
import location from "../assets/location.png";
import telephone from "../assets/telephone.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-[#131316]"
    >
      <div className="w-full h-48 relative">
        <img
          src={one}
          alt="normal"
          className="w-full h-full object-cover opacity-15"
        />
        <motion.h1
         initial={{ y: -100,opacity:0 }}
         animate={{ y: 0 ,opacity:1}}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="absolute tracking-wider text-2xl md:text-4xl w-full text-center bottom-5"
          id="title"
        >
          Contact us
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="pt-24 pb-10 mx-10 lg:mx-20 grid grid-cols-1 md:grid-cols-2 gap-5 justify-between"
      >
        <motion.div className="text-white flex flex-col gap-10">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base font-extrabold lg:text-2xl tracking-wider"
          >
            Reach Out to Refine Your Body at Elite Fitness
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3 items-center"
          >
            <img src={location} alt="" className="w-8 lg:w-12" />
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 text-sm xl:text-lg"
              >
                No.83, 1, Ashtabujam Rd, Dhibighat, Choolai,
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-gray-400 text-sm xl:text-lg"
              >
                Chennai, Tamil Nadu 600112
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-3 items-center"
          >
            <img src={telephone} alt="" className="w-8 lg:w-12" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-gray-400 text-sm xl:text-lg"
            >
              +91 9854761250
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex gap-3 items-center"
          >
            <img src={email} alt="" className="w-8 lg:w-12" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-400 text-sm xl:text-lg"
            >
              elitefitness@gmail.com
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-5 mt-2"
        >
          <motion.input
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            type="text"
            placeholder="Enter your Name"
            className="bg-transparent border-2 border-gray-500 p-1 md:p-2 w-full rounded-md outline-none"
          />
          <motion.input
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent border-2 border-gray-500 p-1 md:p-2 w-full rounded-md outline-none"
          />
          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            placeholder="Enter your comments"
            rows={5}
            className="bg-transparent border-2 border-gray-500 p-1 md:p-2 w-full rounded-md outline-none"
          ></motion.textarea>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-bold bg-orange-200 p-2 text-base w-full rounded-md lg:text-xl"
          >
            Submit
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="mt-10 pb-10 mx-5 lg:mx-20">
        <iframe
          title="Gym Location Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31088.149504466477!2d80.22667599406094!3d13.098002112532477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schennai%20best%20fitness%20studio!5e0!3m2!1sen!2sin!4v1718350235649!5m2!1sen!2sin"
          className="w-full h-96 lg:h-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;

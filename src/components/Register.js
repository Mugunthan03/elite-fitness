import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import one from '../assets/registerbanner.jpg';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { toast } from 'react-toastify';

const Register = ({ setShowRegister }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);     
      setShowRegister(false);
      navigate('/login');
      toast.success("User Registered  Successfully", {
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'       
      });
    } catch (error) {
      console.error('Error registering user:', error.message);
      setError(error.message); // Set error message
      toast.error(error.message, {
        position: "top-left",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isVisible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }

    return () => {
      body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setShowRegister(false); // Update the prop if necessary
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-95 flex items-center justify-center ${isVisible ? '' : 'hidden'}`}>
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-full mt-16 mb-10 mx-10 max-w-[900px] relative"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <motion.button
          className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full 
          focus:outline-none z-50"
          onClick={handleClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          X
        </motion.button>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <img src={one} alt="Register" loading='lazy' className="w-full h-64 lg:h-full object-cover transform scale-105 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-base md:text-xl lg:text-2xl xl:text-4xl font-bold mb-6 text-center text-gray-800">Join our Fitness Community</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="flex flex-col gap-3" onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Enter your Email"
                className="border-2 p-1 lg:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your Password"
                className="border-2 p-1 lg:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white p-1 lg:p-3 rounded-md font-bold hover:bg-orange-600"
              >
                Register Here
              </button>
              <p className="text-center text-gray-800">
                Already have an account?{' '}
                <span onClick={handleLogin} className="text-orange-500 hover:text-orange-700 cursor-pointer">
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

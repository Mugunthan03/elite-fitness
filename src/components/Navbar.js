import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { toast } from 'react-toastify';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from '../context/cartContext';
import { BsBagCheck } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useCart(); 
  const [nav, setNav] = useState(false);

  const toggleSidebar = () => {
    setNav(!nav);    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Firebase listener to track authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user if logged in
      } else {
        setUser(null); // Clear user state if logged out
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      setUser(null); 
      navigate('/'); 
      toast.success('Successfully logged out',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Variants for sidebar animation
  const sidebarVariants = {
    open: { x: 0 ,duration:0.2,ease:'easeOut'},
    closed: { x: '-100%',duration:0.2,ease:'easeOut' }
  };

  // Variant for individual list items
  const listItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };


  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/plans", label: "Plans" },
    { path: "/gears", label: "Gym Gears" },
    { path: "/nutrients", label: "Nutrients" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed w-full z-10">
      <div className={`bg-black ${bg ? 'bg-opacity-50' : 'bg-opacity-5'}`}>
        <div className="flex justify-between lg:justify-around items-center pt-3 mx-2">
          <img src={logo} alt="navbarlogo" className='w-16 md:w-28 pb-2'/>
          <div className="gap-10 capitalize hidden lg:flex font-semibold tracking-widest">
            {links.map((link, index) => (
              <Link key={index} smooth={true} duration={500} to={link.path}>
                <p className='text-white hover:text-gray-300 transition-all duration-200'>{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {user ? (
              <>
                <div className="relative">
                  <Link to="/cart">
                    <p className='text-2xl lg:text-3xl text-white hover:text-gray-300'><IoCartOutline /></p>
                    {totalCartItems > 0 && (
                      <span className="absolute -top-1 -right-3 flex items-center justify-center h-5 w-5 bg-orange-500 text-white text-xs rounded-full">
                        {totalCartItems}
                      </span>
                    )}
                  </Link>
                </div>
                <Link to="/orders"><p><BsBagCheck className='text-xl lg:text-2xl text-white hover:text-gray-300 ' /></p></Link>
                <button onClick={handleLogout} className='font-semibold transition-all duration-200 bg-orange-300 hover:bg-orange-400 hover:text-black px-3 py-1 rounded-md text-sm lg:text-base'>Logout</button>
                <BiMenuAltRight size={28} onClick={toggleSidebar} className='cursor-pointer text-white block lg:hidden'/>
              </>
            ) : (
              <>
                <button onClick={handleRegister} className='font-semibold border-2 px-3 border-orange-300 py-1 text-white hover:text-black transition-all duration-200 hover:bg-orange-300 rounded-md'>Register</button>
                <button onClick={handleLogin} className='font-semibold transition-all duration-200 text-white hover:bg-orange-300 hover:text-black px-3 py-1 rounded-md'>Login</button>
                <BiMenuAltRight size={28} onClick={toggleSidebar} className='cursor-pointer text-white hover:text-gray-300 block lg:hidden'/>
              </>
            )}
          </div>
        </div>
        
        {/* Animated sidebar */}
        <motion.ul
          className='bg-black bg-opacity-90 fixed top-0 left-0 w-72 h-screen transition-all duration-100 font-semibold text-white flex justify-evenly flex-col items-center'
          variants={sidebarVariants}
          initial="closed"
          animate={nav ? "open" : "closed"}
        >
          {links.map((link, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.9 }}
              className='text-white hover:text-orange-300'
            >
              <Link smooth duration={500} onClick={() => setNav(!nav)} to={link.path}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;

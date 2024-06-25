import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import About from './pages/About';
import Plans from './pages/Plans';
import Gears from './pages/Gears';
import Nutrients from './pages/Nutrients';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './components/Cart';
import Orders from './components/Orders';
import OrderSuccessNotification from './components/OrderSuccessNotification';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();

  const hideNavbarAndFooter = location.pathname === '/register' || location.pathname === '/login';

  return (
    <div>
      <ScrollToTop /> 
      {!hideNavbarAndFooter && <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />}
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/gears" element={<Gears />} />
        <Route path="/nutrients" element={<Nutrients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/orders" element={<Orders/>} /> 
        <Route path="/ordersucess" element={<OrderSuccessNotification/>} /> 

        <Route path="/login" element={<Login setShowLogin={setShowLogin} />} />
        <Route path="/register" element={<Register setShowRegister={setShowRegister} />} />
      </Routes>
      <ToastContainer />
      {!hideNavbarAndFooter && <Footer />}

      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}
    </div>
  );
};

export default App;

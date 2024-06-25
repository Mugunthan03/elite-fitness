import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const OrderSuccessNotification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Close the notification after 5 seconds
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center flex-col justify-center bg-white z-50">
          <div className="bg-green-500 rounded-full h-10 w-10 p-6 flex items-center justify-center">
            <span className="text-white text-4xl">✓</span>
          </div>
          <div>
            <h1 className='text-center font-bold tracking-wider text-lg lg:text-2xl'>Order successfully placed</h1>
          </div>
          <Confetti  width={1400} height={600} />  
                 
         
        </div>
      )}
    </>
  );
};

export default OrderSuccessNotification;

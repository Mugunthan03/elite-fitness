import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import { useCart } from '../context/cartContext';
import { MdAddShoppingCart } from "react-icons/md";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, placeOrder } = useCart();
  const navigate = useNavigate(); // Use navigate hook for navigation

  const handlePlaceOrder = async () => {
    await placeOrder(); // Call placeOrder function from context
    // After placing order, navigate to Orders page
    navigate('/orders');
  };

  return (
    <div className='w-full min-h-screen bg-[#131316] text-white'>
      <h1 className='text-center text-xl md:text-2xl pt-20'>My cart</h1>
      <div className='mx-7 pb-10 pt-5'>
        {cartItems.length === 0 ? (
          <>
          
          <div className=' w-full flex justify-center pt-32'>
          <MdAddShoppingCart className='text-9xl text-gray-400 ' />
           </div> 
           <p className='text-center text-xl text-gray-400'>Your cart is empty</p>
          </>
          
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className='flex justify-between items-center p-5 border-b border-gray-700'>
               
                <div className='flex items-start gap-5'>
                  <img src={item.src} alt={item.name} className='w-20 h-20 object-cover rounded-md' />
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-sm md:text-base xl:text-lg'>{item.name}</h2>
                    <p className='text-sm text-gray-400'>₹ {Number(item.price)}</p>
                    <div className='flex items-center gap-2'>
                      <button onClick={() => decreaseQuantity(item.id)} className='border border-orange-300 px-2 py-1 rounded'>-</button>
                      <span className='text-lg'>{Number(item.quantity)}</span>
                      <button onClick={() => increaseQuantity(item.id)} className='border border-orange-300 px-2 py-1 rounded'>+</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className='text-red-500 ml-2'>Remove</button>
              </div>
            ))}
            <div className='mt-5 text-right'>
              <h2 className='text-base lg:text-xl font-bold'>Total Price: ₹ {getTotalPrice().toFixed(2)}</h2>
              <button onClick={handlePlaceOrder} className='bg-orange-300 p-2 text-black rounded-md mt-3 text-sm lg:text-base'>Proceed to order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

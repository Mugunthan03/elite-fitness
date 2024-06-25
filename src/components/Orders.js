import React, { useEffect, useState } from 'react';
import { useCart } from '../context/cartContext';
import OrderSuccessNotification from './OrderSuccessNotification'; 
import { IoBagAddOutline } from "react-icons/io5";

const Orders = () => {
  const { orders, user, fetchOrders } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      fetchOrders(user.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Function to compare createdAt timestamps for sorting orders
  const compareCreatedAt = (orderA, orderB) => {
    if (orderA.createdAt < orderB.createdAt) {
      return 1; // A should come after B if A's createdAt is earlier
    }
    if (orderA.createdAt > orderB.createdAt) {
      return -1; // A should come before B if A's createdAt is later
    }
    return 0; // Orders are the same in terms of createdAt
  };

  return (
    <div className='w-full min-h-screen bg-[#131316] text-white'>
       <h1 className='pt-20 text-center text-xl'>My Orders List</h1>
      
      <div className=' mx-5 lg:mx-10 pb-5 pt-10 '>
        {orders.length === 0 ? (
          <>
          
          <div className=' w-full flex justify-center pt-32'>
          <IoBagAddOutline className='text-9xl text-gray-400 ' />
           </div> 
           <p className='text-center text-xl text-gray-400'>You have no orders</p>
          </>
        ) : (
          <div>
            {/* Sort orders by createdAt in descending order */}
            {orders.slice().sort(compareCreatedAt).map((order) => (
              <div key={order.docId} className='mb-10'>
                <div className='border border-gray-700 p-5'>
                  {order.items.map((item) => (
                    <div key={item.id} className='flex justify-between items-center p-2 border-b border-gray-700'>
                      <div className='flex items-start gap-5'>
                        <img src={item.src} alt={item.name} className='w-20 h-20 object-cover rounded-md' />
                        <div className='flex flex-col gap-3'>
                          <h2 className='text-sm lg:text-base xl:text-lg'>{item.name}</h2>
                          <p className='text-sm text-gray-400'>₹ {Number(item.price)}</p>
                          <p className='text-sm text-gray-400'>Quantity: {Number(item.quantity)}</p>
                          <p className='text-sm text-orange-300'>Order placed on: <span className='text-gray-400'>{order.createdAt.toDate().toLocaleString()}</span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='mt-5 text-right'>
                    <h2 className='text-base lg:text-base xl:text-xl'>Total Purchase: ₹ {order.total.toFixed(2)}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {orderSuccess && <OrderSuccessNotification onClose={() => setOrderSuccess(false)} />}
    </div>
  );
};

export default Orders;

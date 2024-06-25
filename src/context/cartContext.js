import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../services/firebase';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  getDocs, 
  query, 
  where, 
  onSnapshot 
} from 'firebase/firestore';
import OrderSuccessNotification from '../components/OrderSuccessNotification';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false); // State for order success notification

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        fetchCartItems(user.uid);
        const ordersUnsubscribe = fetchOrders(user.uid); // Start fetching orders on user login
        return () => ordersUnsubscribe(); // Clean up orders listener on user logout
      } else {
        setCartItems([]);
        setOrders([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchCartItems = async (uid) => {
    try {
      const q = query(collection(db, 'cartItems'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
      setCartItems(items);
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      toast.error('Failed to fetch cart items. Please try again',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const fetchOrders = (uid) => {
    try {
      const q = query(collection(db, 'orders'), where('uid', '==', uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items = querySnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
        setOrders(items);
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching orders:', error.message);
      toast.error('Failed to fetch orders. Please try again',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const addToCart = async (product) => {
    if (!user) {
      toast.error("login to buy the products",{
        position: "top-center",       
        autoClose: 3000,
        className:'toast-custom-style'
      });
      return;
    }

    try {
      const itemIndex = cartItems.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        const updatedItems = [...cartItems];
        updatedItems[itemIndex].quantity += 1;
        await updateDoc(doc(db, 'cartItems', updatedItems[itemIndex].docId), {
          quantity: updatedItems[itemIndex].quantity
        });
        setCartItems(updatedItems);
      } else {
        const newItem = { ...product, quantity: 1, uid: user.uid };
        const docRef = await addDoc(collection(db, 'cartItems'), newItem);
        newItem.docId = docRef.id;
        setCartItems([...cartItems, newItem]);
        toast.success('product Added to Cart', {
          position: "top-right",       
          autoClose: 2000,   
          className:'toast-custom-style'
        });
      }
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      toast.error('Failed to add product to cart. Please try again.',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const removeFromCart = async (id) => {
    if (!user) {
      toast.error("You need to be logged in to remove items from the cart.",{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
      return;
    }

    try {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      const itemToRemove = cartItems.find((item) => item.id === id);

      if (itemToRemove && itemToRemove.docId) {
        await deleteDoc(doc(db, 'cartItems', itemToRemove.docId));
        setCartItems(updatedItems);
        toast.success('product removed from Cart', {
          position: "top-right",       
          autoClose: 2000,
          className:'toast-custom-style'    
         
        });
      }
    } catch (error) {
      console.error('Error removing from cart:', error.message);
      toast.error('Failed to remove product from cart. Please try again.',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const increaseQuantity = async (id) => {
    try {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const itemToUpdate = updatedItems.find((item) => item.id === id);
      if (itemToUpdate && itemToUpdate.docId) {
        await updateDoc(doc(db, 'cartItems', itemToUpdate.docId), { quantity: itemToUpdate.quantity });
        setCartItems(updatedItems);
      }
    } catch (error) {
      console.error('Error updating quantity:', error.message);
      toast.error('Failed to update quantity. Please try again.',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const decreaseQuantity = async (id) => {
    try {
      const updatedItems = cartItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );

      const itemToUpdate = updatedItems.find((item) => item.id === id);
      if (itemToUpdate && itemToUpdate.docId) {
        await updateDoc(doc(db, 'cartItems', itemToUpdate.docId), { quantity: itemToUpdate.quantity });
        setCartItems(updatedItems);
      }
    } catch (error) {
      console.error('Error updating quantity:', error.message);
      toast.error('Failed to update quantity. Please try again.',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
  };

  const placeOrder = async () => {
    if (!user) {
      toast.error("You need to be logged in to place an order.",{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
      return;
    }

    try {
      const orderData = {
        uid: user.uid,
        items: cartItems,
        total: getTotalPrice(),
        createdAt: new Date()
      };

      await addDoc(collection(db, 'orders'), orderData);

      for (const item of cartItems) {
        await deleteDoc(doc(db, 'cartItems', item.docId));
      }

      setCartItems([]);
      setOrderSuccess(true); // Set order success state to true     

    } catch (error) {
      console.error('Error placing order:', error.message);
      toast.error('Failed to place order. Please try again.',{
        position: "top-right",       
        autoClose: 2000,
        className:'toast-custom-style'
      });
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, orders, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, placeOrder }}>
      {children}
      {orderSuccess && <OrderSuccessNotification onClose={() => setOrderSuccess(false)} />}
    </CartContext.Provider>
  );
};

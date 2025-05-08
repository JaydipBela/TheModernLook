import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();


const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};


const calculateCartCount = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.quantity, 0);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

 
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
      setCartTotal(calculateCartTotal(parsedCartItems));
      setCartCount(calculateCartCount(parsedCartItems));
    }
  }, []);


  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item._id === product._id
      );

      let updatedCartItems;

      if (existingItemIndex >= 0) {
       
        updatedCartItems = [...prevItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + quantity,
        };
      } else {
     
        updatedCartItems = [
          ...prevItems,
          { ...product, quantity },
        ];
      }

      
      setCartTotal(calculateCartTotal(updatedCartItems));
      setCartCount(calculateCartCount(updatedCartItems));

      return updatedCartItems;
    });
  };


  const removeFromCart = (product) => {
    setCartItems(prevItems => {
      const updatedCartItems = prevItems.filter(
        (item) => item._id !== product._id
      );

      setCartTotal(calculateCartTotal(updatedCartItems));
      setCartCount(calculateCartCount(updatedCartItems));

      
      if (updatedCartItems.length === 0) {
        localStorage.removeItem('cartItems');
      }

      return updatedCartItems;
    });
  };

  
  const updateQuantity = (_id, quantity) => {
    
    if (quantity <= 0) {
      return;
    }

    setCartItems(prevItems => {
      const updatedCartItems = prevItems.map((item) =>
        item._id === _id ? { ...item, quantity } : item
      );

      
      setCartTotal(calculateCartTotal(updatedCartItems));
      setCartCount(calculateCartCount(updatedCartItems));

      return updatedCartItems;
    });
  };

  
  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
    setCartCount(0);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { BsCartPlus } from 'react-icons/bs';
import './AddToCart.css';

const AddToCart = ({ product, showQuantity = false, buttonText = "Add To Cart", className = "" }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product, quantity);
    

    const successMessage = document.createElement('div');
    successMessage.className = 'add-to-cart-success';
    successMessage.textContent = 'Added to cart!';
    document.body.appendChild(successMessage);
    
    
    setTimeout(() => {
      successMessage.classList.add('fade-out');
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 500);
    }, 1500);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className={`add-to-cart-container ${className}`}>
      {showQuantity && (
        <div className="quantity-selector">
          <button 
            className="quantity-btn" 
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            onClick={(e) => e.stopPropagation()}
            className="quantity-input"
          />
          <button 
            className="quantity-btn" 
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      )}
      <button 
        className="add-to-cart-button" 
        onClick={handleAddToCart}
      >
        <BsCartPlus className="cart-icon" />
        {buttonText}
      </button>
    </div>
  );
};

export default AddToCart;

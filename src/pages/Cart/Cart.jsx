import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import CommonHero from '../../components/CommonHero/CommonHero';
import images from '../../assets/images';
import './Cart.css';

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item._id, newQuantity);
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <CommonHero title="Shopping Cart" navlink="cart" subtitle="home" image={images.Contact} />
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/shop" className="continue-shopping">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <CommonHero title="Shopping Cart" navlink="cart" subtitle="home" image={images.Contact} />
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <h1  className=''>Your Shopping Cart</h1>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart-items">
            <div className="cart-items-header">
              <span className="product-col">Product</span>
              <span className="price-col">Price</span>
              <span className="quantity-col">Quantity</span>
              <span className="total-col">Total</span>
              <span className="action-col">Action</span>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <div className="product-col">
                  <div className="cart-product">
                    <img src={item.images[0]} alt={item.name} />
                    <div className="cart-product-info">
                      <h3>{item.name}</h3>
                      <p className="product-category">{item.decore}</p>
                    </div>
                  </div>
                </div>

                <div className="price-col">
                  <p className='white'>₹{item.price.toLocaleString()}</p>
                  {item.orn_price && (
                    <p className="original-price">₹{item.orn_price.toLocaleString()}</p>
                  )}
                </div>

                <div className="quantity-col">
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className='white'>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="total-col">
                  <p className='white'>₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>

                <div className="action-col">
                  <button
                    className="remove-item"
                    onClick={() => handleRemoveItem(item)}
                    aria-label="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary white">
            <div className="cart-totals">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="shipping">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
            </div>
            <div className="cart-actions">
              <Link to="/shop" className="continue-shopping">
                <FaArrowLeft /> Continue Shopping
              </Link>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

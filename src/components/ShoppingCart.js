'use client';

import React, { useState, useEffect } from 'react';
import getAllProducts from '../api/productsData';
import useAuth from '../utils/context/authContext';

export default function ShoppingCart() {
  const [availableProducts, setAvailableProducts] = useState([]);

  // Cart items state
  const [cartItems, setCartItems] = useState([]);

  // Payment methods state
  const [paymentTypes, setPaymentTypes] = useState([]);

  const { user } = useAuth();

  const getAvailableProducts = () => {
    getAllProducts(user.uid).then(setAvailableProducts);
  };

  useEffect(() => {
    getAvailableProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      // If the product doesn't exist in the cart, add it
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => cartItems.reduce((total, product) => total + product.price * product.quantity, 0);

  // Handle payment type selection
  const handlePaymentChange = (event) => {
    setPaymentTypes(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Shopping Cart</h1>

      {/* Display Available Products */}
      <h2>Available Products</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {availableProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button type="submit" onClick={() => addToCart(product)} style={{ padding: '5px 10px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      {/* Display Cart Items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ margin: '10px 0' }}>
                <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span> x <span>{item.quantity}</span>
                <button type="submit" onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <hr />

          <h3>Total: ${calculateTotal().toFixed(2)}</h3>

          {/* Payment Type Dropdown */}
          <div>
            <label htmlFor="paymentType">Select Payment Type: </label>
            <select id="paymentType" value={paymentTypes} onChange={handlePaymentChange} style={{ padding: '5px 10px', margin: '10px' }}>
              <option value="">--Select Payment Method--</option>
              {paymentTypes.map((paymentType) => (
                <option key={paymentType.id} value={paymentType.name}>
                  {paymentType.name}
                </option>
              ))}
            </select>
          </div>

          {paymentTypes && (
            <div>
              <h4>Selected Payment Type: {paymentTypes}</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

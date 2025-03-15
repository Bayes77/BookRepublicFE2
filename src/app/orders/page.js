'use client';

import React, { useState } from 'react';
import ProductsDetailsCard from '../../components/ProductsDetailsCard';

export default function ShoppingCartOrdersPage() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Example of Product Cards */}
      <ProductsDetailsCard addToCart={addToCart} />

      {/* Render Cart Items */}
      <h3>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

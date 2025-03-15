'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleProduct } from '../api/productsData';

export default function ProductsDetailsCard({ addToCart, params }) {
  const [cardData, setCardData] = useState({});
  const { id } = params;

  const getTheSingleProducts = () => {
    getSingleProduct(id).then(setCardData);
  };

  useEffect(() => {
    getTheSingleProducts();
  }, []);

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      {/* <img src={cardData.productImage} className="card-img-top" alt="Product Image" /> */}
      <div className="card-body">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">{cardData.description}</p>
        <p className="card-text">Price: ${cardData.price}</p>
        <p className="card-text">Quantity Available: {cardData.quantity}</p>
        <p className="card-text">Available: {cardData.available}</p>
        <p className="card-text">Category: {cardData.productTypes?.name}</p>

        <button
          type="submit"
          onClick={() => addToCart(cardData)} // Pass product data to add to cart
          style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductsDetailsCard.propTypes = {
  params: PropTypes.shape([]),
  addToCart: PropTypes.func.isRequired, // Expecting a function to be passed down
};

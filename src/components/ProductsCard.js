'use client';

import React from 'react';
import PropTypes from 'prop-types';

function ProductsCard({ productsObj }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <image src={productsObj.productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productsObj.name}</h5>
        <p className="card-text">{productsObj.description}</p>
        <a href={productsObj.productsURL} className="btn btn-primary">
          Product Details
        </a>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  productsObj: PropTypes.shape({
    name: PropTypes.string,
    productImage: PropTypes.string,
    description: PropTypes.string,
    productsURL: PropTypes.string,
  }).isRequired,
};

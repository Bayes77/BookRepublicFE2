'use client';

import React from 'react';
import PropTypes from 'prop-types';

export default function CustomersCard({ customersObj }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <image src={customersObj.productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{customersObj.Name}</h5>
        <p className="card-text">{customersObj.address}</p>
        <p className="card-text">{customersObj.email}</p>
      </div>
    </div>
  );
}

CustomersCard.propTypes = {
  customersObj: PropTypes.shape({
    Name: PropTypes.string,
    productImage: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

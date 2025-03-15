'use client';

// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { getAllProducts}  from '../api/productsData';

export default function ProductsCard({ productsObj }) {
  // const [products, setProductsData] = useState({});

  //   useEffect(() => {
  //     getAllProducts().then((data) => {
  //         setProductsData(data);
  //     });
  // }, []);

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <image src={productsObj.productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productsObj.productName}</h5>
        <p className="card-text">{productsObj.description}</p>
        <p className="card-text">${productsObj.price}</p>
        <p className="card-text">#{productsObj.quantity}</p>
        <p className="card-text">{productsObj.available}</p>
        <p className="card-text">{productsObj.productType?.name}</p>
        <a type="submit" href={`/products/details${productsObj.id}`} className="btn btn-primary">
          Product Details
        </a>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  productsObj: PropTypes.shape({
    productName: PropTypes.string,
    productImage: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    available: PropTypes.bool,
    productsURL: PropTypes.string,
    id: PropTypes.number,
    productType: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

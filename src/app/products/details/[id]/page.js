'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleProduct } from '../../../../api/productsData';

export default function ViewProductsDetails({ params }) {
  const [productsDetails, setProductsDetails] = useState({});

  const { id } = params;

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setProductsDetails(data);
    });
  });

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h3>
          {productsDetails.productName}
          <ul>
            <li>{productsDetails.price}</li>
            <li>{productsDetails.description}</li>
            <li>{productsDetails.available}</li>
            <li>{productsDetails.productType?.name}</li>
            <li>{productsDetails.sellers?.name}</li>
          </ul>
        </h3>
      </div>
    </div>
  );
}

ViewProductsDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

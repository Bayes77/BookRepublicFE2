'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function SellerCard({ sellersObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{sellersObj.storeName}</Card.Title>
        <p className="card-text bold">{sellersObj.sellerName}</p>
        <p className="card-text bold">{sellersObj.address}</p>
        <p className="card-text bold">{sellersObj.email}</p>
        {/* <Link href={`/seller/details/${sellerObj.eventId}`} passHref> */}
        {/* <Button variant="info">Order History</Button> */}
        {/* </Link> */}
      </Card.Body>
    </Card>
  );
}

SellerCard.propTypes = {
  sellersObj: PropTypes.shape({
    storeName: PropTypes.string,
    sellerName: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

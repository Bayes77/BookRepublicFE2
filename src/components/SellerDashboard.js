'use client';

// import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import getSellers from '../api/sellersData';

export default function SellerDashboard() {
  const [sellersData, setSellersData] = useState({});

  useEffect(() => {
    getSellers().then((data) => {
      setSellersData(data);
    });
  }, []);

  const dashboardStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={dashboardStyle}>
      <h1>{sellersData.storeName}</h1>
      <div style={gridStyle}>
        <ul>
          <li>{sellersData.sellerName}</li>
          <li>{sellersData.address}</li>
          <li>{sellersData.email}</li>
        </ul>
      </div>
    </div>
  );
}

//   SellerDashboard.propTypes = {
// params: PropTypes.shape({
// id: PropTypes.string.isRequired,
// }).isRequired,
//  };

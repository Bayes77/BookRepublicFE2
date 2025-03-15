'use client';

import React, { useEffect, useState } from 'react';

import SellerCard from '../../components/SellerCard';
import getSellers from '../../api/sellersData';

function SellersPage() {
  const [sellers, setSellers] = useState([]);

  const getAllTheSellers = () => {
    getSellers().then(setSellers);
  };

  useEffect(() => {
    getAllTheSellers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {sellers.map((seller) => (
          <SellerCard key={seller.id} sellersObj={seller} onUpdate={getAllTheSellers} />
        ))}
      </div>
    </div>
  );
}

export default SellersPage;

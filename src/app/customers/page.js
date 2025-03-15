'use client';

import React, { useEffect, useState } from 'react';
import getCustomers from '../../api/customersData';
import CustomersCard from '../../components/CustomerCard';

function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  const getAllTheCustomers = () => {
    getCustomers().then(setCustomers);
  };

  useEffect(() => {
    getAllTheCustomers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {customers.map((customer) => (
          <CustomersCard key={customer.id} customersObj={customer} onUpdate={getAllTheCustomers} />
        ))}
      </div>
    </div>
  );
}

export default CustomersPage;

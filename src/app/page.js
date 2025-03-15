'use client';

import React, { useEffect, useState } from 'react';

import ProductsCard from '../components/ProductsCard';
import { getAllProducts } from '../api/productsData';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItems] = useState('');

  // *Get user ID using useAuth hook
  // const { user } = useAuth();

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  function handleChange(e) {
    setSearchItems(e.target.value);
  }

  const searchResults = products.filter((product) => JSON.stringify(product).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

  return (
    <>
      <div className="search-bar-container">
        <input style={{ width: '600px', display: 'block', margin: '0 auto', borderRadius: '7px', marginTop: '15px' }} type="search" placeholder="Search for Products" onChange={handleChange} className="search-input" />
      </div>
      <div className="d-flex flex-wrap">
        {searchResults.map((product) => (
          <ProductsCard key={products.id} productsObj={product} onUpdate={getAllTheProducts} />
        ))}
      </div>
    </>
  );
}

export default Home;

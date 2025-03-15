'use client';

import { useEffect, useState } from 'react';
import ProductsCard from '../../components/ProductsCard';
import { getAllProducts } from '../../api/productsData';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItems] = useState('');

  // const { user } = useAuth();

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  function handleChange(e) {
    setSearchItems(e.target.value);
  }

  const searchResults = products.filter((product) => JSON.stringify(product).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <input style={{ width: '600px', display: 'block', margin: '0 auto', borderRadius: '7px', marginTop: '15px' }} type="search" placeholder="Search for Products" onChange={handleChange} className="search-input" />
      </div>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {' '}
          {searchResults.map((product) => (
            <ProductsCard key={product.id} productsObj={product} onUpdate={getAllTheProducts} />
          ))}
        </div>
      </div>
    </>
  );
}

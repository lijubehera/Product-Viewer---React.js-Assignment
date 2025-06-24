import React, { useEffect, useState } from 'react';
import { getProducts } from './api'; // changed from '../services/api'
import ProductCard from './ProductCard'; // changed from '../components/ProductCard'
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    getProducts().then(res => setProducts(res.data.products));
  }, []);

  const filtered = [...products]
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <select onChange={e => setSort(e.target.value)} style={{ padding: '8px' }}>
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
        <button onClick={logout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default ProductPage;

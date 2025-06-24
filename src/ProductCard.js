import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={product.thumbnail} alt={product.title} width="100%" height="120px" />
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;


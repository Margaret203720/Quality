import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          country={product.country}
          size={product.size}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;

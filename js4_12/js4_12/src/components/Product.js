import React from 'react';

const Product = ({ name, country, size, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>Country: {country}</p>
        <p>Size: {size}</p>
      </div>
    </div>
  );
};

export default Product;

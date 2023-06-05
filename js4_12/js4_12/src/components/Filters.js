import React from 'react';

const Filters = ({ filterProducts }) => {
  return (
    <div className="filters">
      <select
        onChange={(e) => filterProducts(e.target.value, null)}
        defaultValue=""
      >
        <option value="">All Countries</option>
        <option value="Russia">Russia</option>
        <option value="Korea">Korea</option>
        <option value="USA">USA</option>
      </select>
      <select
        onChange={(e) => filterProducts(null, e.target.value)}
        defaultValue=""
      >
        <option value="">All Sizes</option>
        <option value="200мл">200мл</option>
        <option value="300мл">300мл</option>
        <option value="400мл">400мл</option>
        <option value="10шт">10шт</option>
      </select>
    </div>
  );
};

export default Filters;

import React, { useState } from 'react';
import './assets/styles.css';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import image1 from './assets/product1.jpg';
import image2 from './assets/product2.jpg';
import image3 from './assets/product3.jpg';
import image4 from './assets/product4.jpg';
import image5 from './assets/product5.jpg';

const products = [
  {
    id: 1,
    name: 'DOLCE MILK Гель для душа «Ханна Банана»',
    country: 'Korea',
    size: '300мл',
    image: image1,
   
  },
  {
    id: 2,
    name: 'DOLCE MILK Гель для душа Молоко и Чернослив',
    country: 'Russia',
    size: '300мл',
    image: image2,
  },
  {
    id: 3,
    name: 'DOLCE MILK Влажные освежающие салфетки Молоко и черная смородина',
    country: 'Korea',
    size: '10шт',
    image: image3,
  },
  {
    id: 4,
    name: 'DOLCE MILK Гель-скраб для душа Молоко и миндаль в хрустящей карамели',
    country: 'Russia',
    size: '400мл',
    image: image4,
  },
  {
    id: 5,
    name: 'DOLCE MILK Гиалуроновый тоник',
    country: 'USA',
    size: '200мл',
    image: image5,
  },
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (country, size) => {
    let filtered = products;
    if (country) {
      filtered = filtered.filter((product) => product.country === country);
    }
    if (size) {
      filtered = filtered.filter((product) => product.size === size);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <header>
        {/* Ваш хедер и слайдер */}
      </header>
      <Filters filterProducts={filterProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/productos`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

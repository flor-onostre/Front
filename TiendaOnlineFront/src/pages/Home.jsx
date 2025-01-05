import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Tienda de Productos Digitales</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

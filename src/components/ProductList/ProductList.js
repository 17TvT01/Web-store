import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.name} width="50" />
            <span>{p.name} - {p.price} VND</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Product Listing - 2500031657</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}

    </div>
  );
}
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
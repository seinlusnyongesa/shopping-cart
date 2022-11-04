import React from "react";
import Product from "../components/Product";

const Products = () => {
  return (
    <div className="grid gap-4 mt-6 max-w-5xl mx-auto grid-cols-fluid">
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;

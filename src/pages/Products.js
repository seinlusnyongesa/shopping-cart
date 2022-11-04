import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDAta = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchDAta();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <div className="grid gap-4 mt-6 max-w-5xl mx-auto grid-cols-fluid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-4.5rem)] w-screen flex justify-center items-center font-bold text-2xl">
          loading...
        </div>
      )}
    </>
  );
};

export default Products;

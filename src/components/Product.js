import React from "react";

const Product = ({ product, addToCart }) => {
  const { id, title, price, description, image } = product;

  return (
    <div className="border border-slate-300 m-5 rounded-t-md">
      <div className="mb-4 h-32 mt-4 flex justify-center items-center">
        <img src={image} alt={description} className="rounded-t-md h-full" />
      </div>
      <div className="flex flex-col mx-4 border-t border-slate-500">
        <h1 className="font-bold capitalize my-2">{title}</h1>
        <h2 className="font-semibold">${price}</h2>
        <button
          className="bg-slate-800 hover:bg-slate-500 text-slate-50 font-bold p-2 my-4"
          onClick={() => addToCart({ id, title, description, price, image })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import TestImg from "../assets/images/swag.jpg";

const Product = () => {
  return (
    <div className="border border-slate-300 mx-5 rounded-t-md">
      <div className="mb-4">
        <img src={TestImg} alt="test" className="rounded-t-md" />
      </div>
      <div className="flex flex-col mx-4 border-t border-slate-500">
        <h1 className="font-bold capitalize my-2">name of clothing</h1>
        <h2 className="font-semibold">price</h2>
        <button className="bg-slate-800 hover:bg-slate-500 text-slate-50 font-bold p-2 my-4">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex justify-center items-center bg-slate-100">
      <div className="w-[40rem]  mx-auto p-2 relative flex flex-col ">
        <h1 className="capitalize text-blue-400 font-semibold text-center text-2xl mb-2">
          get the best products from our store
        </h1>
        <h2 className="text-slate-700 font-bold text-5xl text-center mb-3">
          Only store you get the value for your money, best fashion
        </h2>
        <button className="bg-slate-800 p-3 font-medium rounded-2xl text-slate-50  text-2xl mt-5 hover:bg-blue-500 hover:text-slate-800">
          <Link to="/products">buy from us</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;

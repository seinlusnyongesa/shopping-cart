import React from "react";
import CartItem from "./CartItem";

const Cart = ({ handleCloseCart, cart, subtractOne, addOne }) => {
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  return (
    <div className="absolute left-0 top-0 w-full h-screen bg-slate-900 bg-opacity-80 z-40">
      <div className="w-full sm:w-1/3 h-full bg-slate-50 absolute top-0 right-0 flex flex-col  items-center gap-2 px-4">
        <h1 className="text-center text-2xl font-semibold mt-3 mb-2">
          shopping cart
        </h1>
        <div className="w-full max-h-80 gap-4 flex flex-col overflow-y-scroll">
          {cart.map((v) => (
            <CartItem
              key={v.id}
              item={v}
              subtractOne={subtractOne}
              addOne={addOne}
            />
          ))}
        </div>
        <h2 className="text-center text-2xl font-semibold mt-3">
          total: ${totalPrice.toFixed(2)}
        </h2>
        <button className="bg-green-400 p-2 w-full font-semibold text-2xl mb-4 hover:bg-green-300">
          checkout
        </button>
        <button
          className="bg-red-400 p-2 w-full font-semibold text-2xl hover:bg-red-300"
          onClick={handleCloseCart}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Cart;

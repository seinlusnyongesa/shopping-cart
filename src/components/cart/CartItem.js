import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, subtractOne, addOne, handleInput }) => {
  const { id, price, title, image, description, quantity } = item;
  return (
    <div className="flex justify-around gap-2">
      <div className="w-32">
        <img src={image} alt={description} className="h-28" />
      </div>
      <div className="flex-1 flex flex-col justify-center  items-center flex-wrap gap-2 ">
        <p className="font-semibold text-sm text-center capitalize">
          {title.substring(0, 15)}...
        </p>
        <p>${price}</p>
        <div className="flex ">
          <button className=" bg-slate-200 p-1" onClick={() => subtractOne(id)}>
            <FaMinus />
          </button>
          <input
            className="w-16 outline-none p-1 text-center"
            value={quantity}
            type="number"
          />
          <button className=" bg-slate-200 p-1" onClick={() => addOne(id)}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

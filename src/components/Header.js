import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header({ handleOpenCart, cart }) {
  let itemCount = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <header className="bg-slate-800 ">
      <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold capitalize text-blue-400">
          swag store
        </h1>
        <nav>
          <ul className="flex gap-4 text-xl">
            <li className="text-slate-200">
              <Link to="/">home</Link>
            </li>
            <li className="text-slate-200">
              <Link to="/products">products</Link>
            </li>
            <li className="text-slate-200 relative " onClick={handleOpenCart}>
              <button className="bg-slate-200 text-slate-800 w-9 h-9 rounded-md flex justify-center items-center">
                <FaShoppingCart />
              </button>
              {itemCount > 0 ? (
                <p className="bg-pink-400 text-slate-900 absolute w-6 h-6 text-sm font-bold flex justify-center items-center rounded-full top-[-5px] right-[-5px]">
                  {itemCount}
                </p>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

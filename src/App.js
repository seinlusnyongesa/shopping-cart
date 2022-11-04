import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./components/cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const addToCart = (item) => {
    const isItemInCart = cart.find((v) => v.id === item.id);
    if (isItemInCart) {
      const newArray = cart.map((v) => {
        if (v.id === item.id) {
          return { ...v, quantity: v.quantity + 1 };
        }
        return v;
      });

      setCart(newArray);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const subtractQuantityByOne = (id) => {
    const editItem = cart.find((v) => v.id === id);
    if (editItem.quantity === 1) {
      let newItems = cart.filter((v) => v.id !== id);
      return setCart(newItems);
    }
    let newItems = cart.map((v) => {
      if (v.id === id) {
        return { ...v, quantity: v.quantity - 1 };
      }
      return v;
    });
    setCart(newItems);
  };

  const addQuantityByOne = (id) => {
    let newItems = cart.map((v) => {
      if (v.id === id) {
        return { ...v, quantity: v.quantity + 1 };
      }
      return v;
    });
    setCart(newItems);
  };

  return (
    <>
      <Router basename="/">
        <Header handleOpenCart={handleOpenCart} cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
        </Routes>
      </Router>
      {isCartOpen ? (
        <Cart
          handleCloseCart={handleCloseCart}
          cart={cart}
          subtractOne={subtractQuantityByOne}
          addOne={addQuantityByOne}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;

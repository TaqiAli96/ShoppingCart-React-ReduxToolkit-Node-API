import React from "react";
import { Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SingleProduct } from "./components/SingleProduct";

function App() {
  return (
    <>
      <Bar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:productId" element={<SingleProduct />} />
        <Route
          exact
          path="*"
          element={
            <div>
              <b>404</b>Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;

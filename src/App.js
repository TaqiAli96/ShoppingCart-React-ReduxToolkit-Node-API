import React from "react";
import { Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import Employees from "./components/Employees";
import Counter from "./components/Counter";
import Users from "./components/Users";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RegisterBusiness from "./components/RegisterBusiness";
import Crud from "./components/Crud";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { VisibleContent } from "./components/VisibleContent";
import { RenderingComponent } from "./components/RenderingComponent";
import { ReduxAsyncThunkApi } from "./components/ReduxAsyncThunkApi";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <ReduxAsyncThunkApi /> */}
      {/* <RenderingComponent /> */}
      {/* <ConditionalRendering /> */}
      <VisibleContent />
      <Bar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="*"
          element={
            <div>
              <b>404</b>Not Found
            </div>
          }
        />

        {/* <Route path="/employees" element={<Employees />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<RegisterBusiness />} />
        <Route path="/crud" element={<Crud />} /> */}
      </Routes>
    </>
  );
}

export default App;

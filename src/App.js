import React from "react";
import { Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import Employees from "./components/Employees";
import Counter from "./components/Counter";
import UsersData from "./components/UsersData";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RegisterBusiness from "./components/RegisterBusiness";
function App() {
  return (
    <>
      <Bar />
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UsersData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<RegisterBusiness />} />
      </Routes>
    </>
  );
}

export default App;

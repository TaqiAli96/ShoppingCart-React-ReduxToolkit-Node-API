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
function App() {
  return (
    <>
      <Bar />
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<RegisterBusiness />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </>
  );
}

export default App;

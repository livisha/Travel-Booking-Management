import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import SignUp from "./components/Auth/SignUp";
import NavBar from "./components/Home/NavBar";
import Login from "./components/Auth/login";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

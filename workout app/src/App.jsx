/* eslint-disable no-unused-vars */

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Obesity from "./pages/obesity";
import Lean from "./pages/lean";
import Normal from "./pages/normal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/obesity" element={<Obesity />} />

        <Route path="/lean" element={<Lean />} />
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </Router>
  );
}

export default App;

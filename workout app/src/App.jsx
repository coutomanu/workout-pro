import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
<<<<<<< HEAD
import Home from "./pages/home"
import Obesity from "./pages/obesity";
=======
import Home from "./pages/home";
>>>>>>> 38ba620b8a1d7098ae810ab2211275c667fddcef

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/obesity" element={<Obesity/>} />
      </Routes>
    </Router>
  );
}

export default App;

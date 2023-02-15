import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cars from "./pages/Cars";
import Car from "./pages/Car";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Routes>
          <Route path="/car/:slug" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

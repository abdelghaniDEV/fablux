import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Business from "./pages/Business";
import WorkDetails from "./pages/WorkDetails";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/:id" element={<WorkDetails />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;

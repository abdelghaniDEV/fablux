import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Business from "./pages/Business";
import WorkDetails from "./pages/WorkDetails";
import { Route, Router, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProject } from "../redux/slices/projectSlice";

function App() {
  const { pathname } = useLocation();
  const diapatch = useDispatch()
  

  useEffect(() => {
    // Scroll to top on pathname change
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    diapatch(fetchProject())
  },[])
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

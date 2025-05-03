import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Schedule from "./Components/Schedule";
import Intake from "./Components/Intake";
import Footer from "./Components/Footer";
import ServiceDetails from "./Components/ServiceDetails";
import ErrorPage from "./Components/ErrorPage";
import Careers from "./Components/Careers";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  window.addEventListener("beforeunload", () => {
    sessionStorage.clear();
  });
  return (
    <div className="App" style={{ background: "white" }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/scheduling" element={<Schedule />} />
        <Route path="/intake-form" element={<Intake />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

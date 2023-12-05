import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Dashboard = () => {
  return (
    <div className="transition duration-300 ease-in-out">
      <Navbar />
      <Home />
      <Feature />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Dashboard;

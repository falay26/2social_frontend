import React from "react";
//Components
import Navbar from "../components/Home/navbar";
import Hero from "../components/Home/hero";
import Footer from "../components/Home/footer";

const HomeScreen = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomeScreen;

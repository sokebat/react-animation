import React from "react";
import HeroSection from "./components/HomePageComponents/HeroSection";
import Cursor from "./components/Crusor/Crusor";
import Navbar from "./components/Navbar/Navbar.jsx";
import DigitalCard from "./components/HomePageComponents/DigitalCard";
import BlogsSection from "./components/HomePageComponents/BlogsSection";
import TestimonialSection from "./components/HomePageComponents/TestimonialSection";
import StatsSection from "./components/HomePageComponents/StatsSection";
import Footer from "./components/Footer/Footer";
import ExclusiveDeals from "./components/HomePageComponents/ExclusiveDeals";

const App = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-700  font-mono">
      <Navbar />

      <Cursor />
      <HeroSection />
      <div className="container gap-y-10">
        <DigitalCard />
        <StatsSection />
        <ExclusiveDeals />
        <TestimonialSection />
        <BlogsSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;

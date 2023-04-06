import React from "react";
import Header from "../components/layout/UserBookingPage/Header";
import SearchBar from "../components/ui/SearchBar";
import ReviewSection from "../components/layout/HomePage/ReviewSection";
import Pricing from "../components/layout/HomePage/Pricing";
import HowItWorks from "../components/layout/HomePage/HowItWorks";
import LocationSection from "../components/layout/HomePage/LocationSection";
import SearchBarSection from "../components/layout/HomePage/SearchBarSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBarSection />
      <ReviewSection />
      <Pricing />
      <HowItWorks />
      <LocationSection />
    </div>
  );
};

export default HomePage;

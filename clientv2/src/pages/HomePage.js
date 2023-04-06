import React from "react";
import Header from "../components/layout/UserBookingPage/Header";
import ReviewSection from "../components/layout/HomePage/ReviewSection";
import Pricing from "../components/layout/HomePage/Pricing";
import HowItWorks from "../components/layout/HomePage/HowItWorks";
import LocationSection from "../components/layout/HomePage/LocationSection";

const HomePage = () => {
  return (
    <div>
        <Header />
        <ReviewSection />
        <Pricing />
        <HowItWorks />
        <LocationSection />
    </div>
  );
};

export default HomePage;

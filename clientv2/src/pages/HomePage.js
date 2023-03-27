import React from "react";
import Header from "../components/layout/UserBookingPage/Header";
import ReviewSection from "../components/layout/HomePage/ReviewSection";
import Pricing from "../components/layout/HomePage/Pricing";
import HowItWorks from "../components/layout/HomePage/HowItWorks";
import Searchbar from "../components/ui/SearchBar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Searchbar
        button={true}
        gridCols="grid-cols-6"
        maxWidth="max-w-2xl" />

      <ReviewSection />
      <Pricing />
      <HowItWorks />
    </div>
  );
};

export default HomePage;

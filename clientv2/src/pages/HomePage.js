import React from "react";
import DefaultHeader from '../components/ui/DefaultHeader';
import ReviewSection from "../components/layout/HomePage/ReviewSection";
import Pricing from "../components/layout/HomePage/Pricing";
import HowItWorks from "../components/layout/HomePage/HowItWorks";
import LocationSection from "../components/layout/HomePage/LocationSection";
import SearchBarSection from "../components/layout/HomePage/SearchBarSection";
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const HomePage = () => {
  return (
    <div>
      <DefaultHeader />
      <SearchBarSection />
      <ReviewSection />
      <Pricing />
      <HowItWorks />
      <LocationSection />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default HomePage;

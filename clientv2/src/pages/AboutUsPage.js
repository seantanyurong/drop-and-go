import React from "react";
import AboutUs from "../components/layout/AboutUsPage/AboutUs";
import DefaultHeader from '../components/ui/DefaultHeader';
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const AboutUsPage = () => {
  return (
    <div>
      <DefaultHeader />
      <AboutUs />
      {/* <Footer />
      <FooterBottom /> */}
    </div>
  );
};

export default AboutUsPage;
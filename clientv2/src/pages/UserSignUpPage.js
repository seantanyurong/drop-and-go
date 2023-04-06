import React from "react";
import DefaultHeader from '../components/ui/DefaultHeader';
import UserSignUp from "../components/layout/SignUpPage/UserSignUp";
import FooterBottom from "../components/ui/FooterBottom";

const UserSignUpPage = () => {
  return (
    <div>
      <DefaultHeader></DefaultHeader>
      <UserSignUp></UserSignUp>
      <FooterBottom></FooterBottom>
    </div>
  );
};

export default UserSignUpPage;

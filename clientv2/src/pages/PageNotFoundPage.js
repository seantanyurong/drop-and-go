import React from "react";
import PageNotFound from "../components/layout/LoginPage/PageNotFound";
import DefaultHeader from '../components/ui/DefaultHeader';

const PageNotFoundPage = () => {
  return (
    <div>
      <DefaultHeader></DefaultHeader> 
      <PageNotFound></PageNotFound> 
    </div>
  );
};

export default PageNotFoundPage;
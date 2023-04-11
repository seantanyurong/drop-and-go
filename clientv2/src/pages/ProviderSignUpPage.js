import React from 'react';
import DefaultProviderHeader from '../components/ui/DefaultProviderHeader';
import ProviderSignUp from '../components/layout/SignUpPage/ProviderSignUp';
import FooterBottom from "../components/ui/FooterBottom";

const ProviderSignUpPage = () => {
    return(
        <div>
            <DefaultProviderHeader></DefaultProviderHeader>
            <ProviderSignUp></ProviderSignUp>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default ProviderSignUpPage;
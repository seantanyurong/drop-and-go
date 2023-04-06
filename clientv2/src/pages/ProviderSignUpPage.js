import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import ProviderSignUp from '../components/layout/SignUpPage/ProviderSignUp';
import FooterBottom from "../components/ui/FooterBottom";

const ProviderSignUpPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <ProviderSignUp></ProviderSignUp>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default ProviderSignUpPage;
import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import ProviderLogin from '../components/layout/LoginPage/ProviderLogin';
import FooterBottom from "../components/ui/FooterBottom";

const ProviderLoginPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <ProviderLogin></ProviderLogin>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default ProviderLoginPage;
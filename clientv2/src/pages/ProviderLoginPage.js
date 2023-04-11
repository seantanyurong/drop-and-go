import React from 'react';
import DefaultProviderHeader from '../components/ui/DefaultProviderHeader';
import ProviderLogin from '../components/layout/LoginPage/ProviderLogin';
import FooterBottom from "../components/ui/FooterBottom";

const ProviderLoginPage = () => {
    return(
        <div>
            <DefaultProviderHeader></DefaultProviderHeader>
            <ProviderLogin></ProviderLogin>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default ProviderLoginPage;
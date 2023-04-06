import React from 'react'
import ProviderHeader from "../components/ui/ProviderHeader";
import ProviderProfile from "../components/layout/ProfilePage/ProviderProfile";
import FooterBottom from "../components/ui/FooterBottom";

const ProviderProfilePage = () => {
    return (
        <div>
            <ProviderHeader></ProviderHeader>
            <ProviderProfile></ProviderProfile>
            <FooterBottom></FooterBottom>
        </div>
    )
}

export default ProviderProfilePage
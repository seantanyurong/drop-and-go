import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import UserLogin from '../components/layout/LoginPage/UserLogin';
import FooterBottom from "../components/ui/FooterBottom";

const UserLoginPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <UserLogin></UserLogin>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default UserLoginPage;
import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import AdminSignUp from '../components/layout/SignUpPage/AdminSignUp';
import FooterBottom from "../components/ui/FooterBottom";

const AdminSignUpPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <AdminSignUp></AdminSignUp>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default AdminSignUpPage;
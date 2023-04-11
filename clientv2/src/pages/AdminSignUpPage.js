import React from 'react';
import DefaultAdminHeader from '../components/ui/DefaultAdminHeader';
import AdminSignUp from '../components/layout/SignUpPage/AdminSignUp';
import FooterBottom from "../components/ui/FooterBottom";

const AdminSignUpPage = () => {
    return(
        <div>
            <DefaultAdminHeader></DefaultAdminHeader>
            <AdminSignUp></AdminSignUp>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default AdminSignUpPage;
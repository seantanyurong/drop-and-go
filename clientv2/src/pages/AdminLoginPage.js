import React from 'react';
import DefaultHeader from '../components/ui/DefaultHeader';
import AdminLogin from '../components/layout/LoginPage/AdminLogin';
import FooterBottom from "../components/ui/FooterBottom";

const AdminLoginPage = () => {
    return(
        <div>
            <DefaultHeader></DefaultHeader>
            <AdminLogin></AdminLogin>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default AdminLoginPage;
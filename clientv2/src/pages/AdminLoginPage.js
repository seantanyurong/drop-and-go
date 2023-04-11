import React from 'react';
import DefaultAdminHeader from '../components/ui/DefaultAdminHeader';
import AdminLogin from '../components/layout/LoginPage/AdminLogin';
import FooterBottom from "../components/ui/FooterBottom";

const AdminLoginPage = () => {
    return(
        <div>
            <DefaultAdminHeader></DefaultAdminHeader>
            <AdminLogin></AdminLogin>
            <FooterBottom></FooterBottom>
        </div>
    );
}

export default AdminLoginPage;
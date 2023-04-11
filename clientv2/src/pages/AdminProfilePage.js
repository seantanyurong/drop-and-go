import React from 'react';
import AdminHeader from '../components/ui/AdminHeader';
import AdminProfile from "../components/layout/ProfilePage/AdminProfile";
import FooterBottom from "../components/ui/FooterBottom";

const AdminProfilePage = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <AdminProfile></AdminProfile>
            <FooterBottom></FooterBottom>
        </div>
    )
}

export default AdminProfilePage

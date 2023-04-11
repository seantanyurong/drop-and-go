import React from 'react';
import DefaultUserHeader from '../components/ui/DefaultUserHeader';
import UserProfile from "../components/layout/ProfilePage/UserProfile";
import FooterBottom from "../components/ui/FooterBottom";

const UserProfilePage = () => {
    return (
        <div>
            <DefaultUserHeader></DefaultUserHeader>
            <UserProfile></UserProfile>
            <FooterBottom></FooterBottom>
        </div>
    )
}

export default UserProfilePage

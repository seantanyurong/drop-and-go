import React from 'react';
import Header from '../components/layout/UserBookingPage/Header';
import UserProfile from "../components/layout/ProfilePage/UserProfile";
import FooterBottom from "../components/ui/FooterBottom";

const UserProfilePage = () => {
    return (
        <div>
            <Header></Header>
            <UserProfile></UserProfile>
            <FooterBottom></FooterBottom>
        </div>
    )
}

export default UserProfilePage

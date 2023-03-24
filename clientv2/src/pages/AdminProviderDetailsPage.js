import React from "react";
import RecentBookings from '../components/layout/AdminUserDetailsPage/RecentBookings'
import UserDetails from '../components/layout/AdminUserDetailsPage/UserDetails'
import AdminHeader from '../components/ui/AdminHeader'

const AdminProviderDetailsPage = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <UserDetails entityType='Provider'></UserDetails>
      <RecentBookings></RecentBookings>
    </div>
  );
};

export default AdminProviderDetailsPage;

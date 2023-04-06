import React from "react";
import UserDetails from '../components/layout/AdminUserDetailsPage/UserDetails'
import AdminHeader from '../components/ui/AdminHeader'

const AdminProviderDetailsPage = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <UserDetails entityType='Provider'></UserDetails>
    </div>
  );
};

export default AdminProviderDetailsPage;

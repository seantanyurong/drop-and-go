import React from "react";
import ListingDetails from "../components/layout/AdminListingDetailsPage/ListingDetails";
import RecentBookings from "../components/layout/AdminUserDetailsPage/RecentBookings";
import AdminHeader from "../components/ui/AdminHeader";

const AdminListingDetailsPage = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <ListingDetails></ListingDetails>
      <RecentBookings entityType={"Listing"}></RecentBookings>
    </div>
  );
};

export default AdminListingDetailsPage;

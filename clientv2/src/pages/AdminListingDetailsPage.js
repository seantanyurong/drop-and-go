import React from 'react'
import ListingDetails from '../components/layout/AdminListingDetailsPage/ListingDetails'
import RecentBookings from '../components/layout/AdminUserDetailsPage/RecentBookings'

const AdminListingDetailsPage = () => {
  return (
    <div>
      <ListingDetails></ListingDetails>
      <RecentBookings entityType={"Listing"}></RecentBookings>
    </div>
  )
}

export default AdminListingDetailsPage
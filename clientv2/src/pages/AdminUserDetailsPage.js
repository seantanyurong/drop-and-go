import React from 'react'
import RecentBookings from '../components/layout/AdminUserDetailsPage/RecentBookings'
import UserDetails from '../components/layout/AdminUserDetailsPage/UserDetails'
import Header from '../components/layout/UserBookingPage/Header'

const AdminUserDetailsPage = () => {
  return (
    <div>
    <Header></Header>
    <UserDetails></UserDetails>
    <RecentBookings></RecentBookings>
    </div>
  )
}

export default AdminUserDetailsPage
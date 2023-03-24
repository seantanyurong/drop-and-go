import React from 'react'
import RecentBookings from '../components/layout/AdminUserDetailsPage/RecentBookings'
import UserDetails from '../components/layout/AdminUserDetailsPage/UserDetails'
import AdminHeader from '../components/ui/AdminHeader'

const AdminUserDetailsPage = () => {
  return (
    <div>
    <AdminHeader></AdminHeader>
    <UserDetails entityType='User'></UserDetails>
    <RecentBookings></RecentBookings>
    </div>
  )
}

export default AdminUserDetailsPage
import React from 'react'
import Records from '../components/layout/AdminDashboardPage/Records'
import AdminHeader from '../components/ui/AdminHeader'

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>
       <Records></Records> 
    </div>
  )
}

export default AdminDashboardPage
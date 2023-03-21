import React from 'react'
import DataTable from '../../ui/DataTableBase'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



const RecentBookings = () => {

const [redirState, setState] = useState(false);
const [id, setData] = useState('');
let bookingsRedirect = redirState ? (<Navigate to={`/admin/bookings/${id}`} />) : '' ;

  return (
    <div>
        <div className='max-w-5xl md:max-w-3xl mx-auto sm:px-6 py-8'>
            <DataTable 
            title="Recent Bookings"
            columns={bookingsColumns} 
            data={data}
            onRowClicked={rowData => {
              setState(true);
              setData(rowData.id);
            }}
            />
            {bookingsRedirect}
          </div>
        {bookingsRedirect}
    </div>
  )
}
const bookingsColumns = [
    {
      name: "User Name",
      selector: (row) => row.userName,
      sortable: true,
    },
    {
      name: "Location Name",
      selector: (row) => row.locationName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.endDate,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
    },
  ];

// placeholder data
const data = [
    {
      id: 1,
      userName: "Nevan Ng",
      email: "nevan@mail.com",
      phone: "91234567",
      locationName: "Adidas @Orchard",
      address: "2 Orchard Turn #B4-25/25A",
      postalCode: "238801",
      startDate: "23/02/23",
      endDate: "24/02/23",
    },
  ];

export default RecentBookings
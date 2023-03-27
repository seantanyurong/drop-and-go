import React from "react";
import DataTable from "../../ui/DataTableBase";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import moment from "moment";

const RecentBookings = ({ entityType }) => {
  const { userId, listingId } = useParams();
  const [bookings, setBookings] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const dbUrl =
        entityType === "User"
          ? `http://localhost:6003/booking/users/${userId}`
          : `http://localhost:6003/booking/listings/${listingId}`;
      const response = await fetch(dbUrl);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`Bookings not found`);
        return;
      } else {
        setBookings(res);
      }

      console.log(res);
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  const [redirState, setState] = useState(false);
  const [id, setData] = useState("");
  let bookingsRedirect = redirState ? (
    <Navigate to={`/admin/booking/${id}`} />
  ) : (
    ""
  );
  const bookingColumns =
    entityType === "User"
      ? [
          {
            name: "Listing Name",
            selector: (row) => row.listingDetails[0]?.name,
            sortable: true,
          },
          {
            name: "Start Date",
            selector: (row) => row.startDate,
            format: (row) => moment(row.startDate).format("lll"),
          },
          {
            name: "End Date",
            selector: (row) => row.endDate,
            format: (row) => moment(row.endDate).format("lll"),
          },
        ]
      : [
          {
            name: "User Name",
            selector: (row) => row.userDetails[0]?.name,
            sortable: true,
          },
          {
            name: "Start Date",
            selector: (row) => row.startDate,
            format: (row) => moment(row.startDate).format("lll"),
          },
          {
            name: "End Date",
            selector: (row) => row.endDate,
            format: (row) => moment(row.endDate).format("lll"),
          },
        ];

        console.log(bookings);

  return (
    <div>
      <div className="max-w-5xl md:max-w-3xl mx-auto sm:px-6 py-8">
        <DataTable
          title="Recent Bookings"
          columns={bookingColumns}
          data={bookings}
          onRowClicked={(rowData) => {
            setState(true);
            setData(rowData._id);
          }}
        />
        {bookingsRedirect}
      </div>
      {bookingsRedirect}
    </div>
  );
};

// placeholder data
const data = [
  {
    id: 1,
    userName: "Nevan Ng",
    email: "nevan@mail.com",
    phone: "91234567",
    listingDetails: {
      name: "test",
    },
    userDetails: {
      name: "test",
    },
    locationName: "Adidas @Orchard",
    address: "2 Orchard Turn #B4-25/25A",
    postalCode: "238801",
    startDate: "23/02/23",
    endDate: "24/02/23",
  },
];

export default RecentBookings;

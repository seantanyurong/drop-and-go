import React from "react";
import { useState, useMemo, useEffect } from "react";
import { Navigate } from "react-router-dom";
import DataTable from "../../ui/DataTableBase";
import FilterComponent from "../../ui/FilterComponent";
import moment from "moment";

const Records = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);

  const [redirectState, setRedirectState] = useState(false);
  const [id, setData] = useState("");
  let userRedirect = redirectState ? <Navigate to={`/admin/user/${id}`} /> : "";
  let providerRedirect = redirectState ? (
    <Navigate to={`/admin/provider/${id}`} />
  ) : (
    ""
  );
  let listingsRedirect = redirectState ? (
    <Navigate to={`/admin/listing/${id}`} />
  ) : (
    ""
  );
  let bookingsRedirect = redirectState ? (
    <Navigate to={`/admin/booking/${id}`} />
  ) : (
    ""
  );

  let [users, setUsers] = useState(data);
  let [providers, setProviders] = useState(data);
  let [listings, setListings] = useState(data);
  let [bookings, setBookings] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const responseUsers = await fetch(`http://localhost:6003/user`);
      const responseProviders = await fetch(`http://localhost:6003/provider`);
      const responseListing = await fetch(`http://localhost:6003/listing`);
      const responseBookings = await fetch(`http://localhost:6003/booking`);

      if (!responseUsers.ok) {
        const message = `An error has occurred: ${responseUsers.statusText}`;
        window.alert(message);
        return;
      }

      const userRes = await responseUsers.json();
      if (!userRes) {
        window.alert(`Users not found`);
        return;
      } else {
        setUsers(userRes);
      }

      if (!responseProviders.ok) {
        const message = `An error has occurred: ${responseProviders.statusText}`;
        window.alert(message);
        return;
      }

      const providerRes = await responseProviders.json();
      if (!providerRes) {
        window.alert(`Providers not found`);
        return;
      } else {
        setProviders(providerRes);
      }

      if (!responseListing.ok) {
        const message = `An error has occurred: ${responseListing.statusText}`;
        window.alert(message);
        return;
      }

      const listingRes = await responseListing.json();
      if (!listingRes) {
        window.alert(`Listings not found`);
        return;
      } else {
        setListings(listingRes);
      }

      if (!responseBookings.ok) {
        const message = `An error has occurred: ${responseBookings.statusText}`;
        window.alert(message);
        return;
      }

      const bookingRes = await responseBookings.json();
      if (!bookingRes) {
        window.alert(`Bookings not found`);
        return;
      } else {
        console.log(bookingRes);
        setBookings(bookingRes);
      }
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  const [filterText, setFilterText] = useState("");
  const filteredUsers = users.filter(
    (item) =>
      item.name &&
      item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredProviders = providers.filter(
    (item) =>
      item.name &&
      item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredListings = listings.filter(
    (item) =>
      item.name &&
      item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        // eslint-disable-next-line no-plusplus
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);

    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
    console.log(csv);
  }

  const Export = ({ onExport }) => (
    <button
      className="rounded-md bg-box-gray w-20 p-1.5 px-4 text-xs font-medium inline-flex items-center"
      onClick={(e) => onExport(e.target.value)}
    >
      Export
    </button>
  );
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    // eslint-disable-next-line
    []
  );

  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div>
            <DataTable
              title="Users"
              columns={userColumns}
              data={filteredUsers}
              onRowClicked={(rowData) => {
                setRedirectState(true);
                setData(rowData._id);
              }}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
            {userRedirect}
          </div>
        );
      case 1:
        return (
          <div>
            <DataTable
              title="Location Providers"
              columns={userColumns}
              data={filteredProviders}
              onRowClicked={(rowData) => {
                setRedirectState(true);
                setData(rowData._id);
              }}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
            {providerRedirect}
          </div>
        );
      case 2:
        return (
          <div>
            <DataTable
              title="Listings"
              columns={locationsColumns}
              data={filteredListings}
              onRowClicked={(rowData) => {
                setRedirectState(true);
                setData(rowData._id);
              }}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
            {listingsRedirect}
          </div>
        );
      case 3:
        return (
          <div>
            <DataTable
              title="Bookings"
              columns={bookingsColumns}
              data={bookings}
              onRowClicked={(rowData) => {
                setRedirectState(true);
                setData(rowData._id);
              }}
              actions={actionsMemo}
            />
            {bookingsRedirect}
          </div>
        );
      default:
        return <p></p>;
    }
  };

  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex grow mt-4 sm:mt-0">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  onClick={() => setActiveMenuItem(0)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 0
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Users
                </li>
                <li
                  onClick={() => setActiveMenuItem(1)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 1
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Providers
                </li>
                <li
                  onClick={() => setActiveMenuItem(2)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 2
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Listings
                </li>
                <li
                  onClick={() => setActiveMenuItem(3)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 3
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Bookings
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {renderSwitch()}
      </div>
    </div>
  );
};

const userColumns = [
  {
    name: "Name",
    selector: (row) => row?.name,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: (row) => row?.email,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => row?.phone,
    sortable: true,
  },
];

const locationsColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
  },
  {
    name: "Postal Code",
    selector: (row) => row.postal,
    sortable: true,
  },
];

const bookingsColumns = [
  {
    name: "User Name",
    selector: (row) => row?.userDetails[0]?.name,
    sortable: true,
  },
  {
    name: "Listing Name",
    selector: (row) => row?.listingDetails[0]?.name,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.endDate,
    format: (row) => moment(row.startDate).format("lll"),
  },
  {
    name: "End Date",
    selector: (row) => row.endDate,
    format: (row) => moment(row.endDate).format("lll"),
  },
];

// placeholder data
const data = [
  {
    id: 1,
    userName: "",
    email: "",
    phone: "",
    userDetails: {
      name: "",
    },
    listingDetails: {
      name: "",
    },
  },
];

export default Records;

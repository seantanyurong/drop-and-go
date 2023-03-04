import React from "react";
import { useState } from "react";
import DataTable from "../../ui/DataTableBase";

const Records = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);

  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div>
            <DataTable columns={userColumns} data={data} />
          </div>
        );
      case 1:
        return (
          <div>
            <DataTable columns={locationsColumns} data={data} />
          </div>
        );
      case 2:
        return (
          <div>
            <DataTable columns={bookingsColumns} data={data} />
          </div>
        );
      default:
        return <p> test</p>;
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
                  Locations
                </li>
                <li
                  onClick={() => setActiveMenuItem(2)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 2
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
    selector: (row) => row.userName,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => row.phone,
    sortable: true,
  },
];

const locationsColumns = [
  {
    name: "Name",
    selector: (row) => row.locationName,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
  },
  {
    name: "Postal Code",
    selector: (row) => row.postalCode,
    sortable: true,
  },
];

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
    endDate: "24/02/23"
  },
  {
    id: 2,
    userName: "Mak Ting Xu Stanley",
    email: "stanley@mail.com",
    phone: "91234567",
    locationName: "Apple @Jewel",
    address: "78 Airport Boulevard #02-234",
    postalCode: "819666",
    startDate: "23/02/23",
    endDate: "24/02/23"
  },
];

export default Records;

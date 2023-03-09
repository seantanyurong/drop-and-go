import React from "react";
import { useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import DataTable from "../../ui/DataTableBase";
import FilterComponent from "../../ui/FilterComponent";

const Records = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);

  const [redirState, setState] = useState(false);
  const [id, setData] = useState("");
  let userRedirect = redirState ? <Navigate to={`/admin/users/${id}`} /> : "";
  let bookingsRedirect = redirState ? (
    <Navigate to={`/admin/bookings/${id}`} />
  ) : (
    ""
  );

  const [filterText, setFilterText] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.userName &&
      item.userName.toLowerCase().includes(filterText.toLowerCase())
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
    console.log(csv)
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
              data={filteredData}
              onRowClicked={(rowData) => {
                setState(true);
                setData(rowData.id);
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
              data={filteredData}
              onRowClicked={(rowData) => {
                setState(true);
                setData(rowData.id);
              }}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
            {userRedirect}
          </div>
        );
      case 2:
        return (
          <div>
            <DataTable
              title="Locations"
              columns={locationsColumns}
              data={filteredData}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <DataTable
              title="Bookings"
              columns={bookingsColumns}
              data={filteredData}
              onRowClicked={(rowData) => {
                setState(true);
                setData(rowData.id);
              }}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              actions={actionsMemo}
            />
            {bookingsRedirect}
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
                  Locations
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
    endDate: "24/02/23",
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
    endDate: "24/02/23",
  },
];

export default Records;

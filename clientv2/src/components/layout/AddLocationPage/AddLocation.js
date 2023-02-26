import { useState } from "react";

const AddLocation = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);


  const AddLocationForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <h3 className="font-semibold">Basic Profile</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Provide the name of your shop
          </p>
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="Shop Name"
            name="shopName"
            value={inputs.shopName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className="mt-1.5 text-xs font-medium py-2" >
            Indicate the total number of bags you have space for
          </p>
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="number"
            name="capacity"
            placeholder="Capacity (bags)"
            value={inputs.capacity || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className="mt-1.5 text-xs font-medium py-2" >
            Provide the details of the primary contact name for the shop
          </p>
          <div>
            <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
              type="text"
              name="contactName"
              placeholder="Primary Contact Name"
              value={inputs.contactName || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <input className="w-full appearance-none border rounded py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
              type="text"
              name="email"
              placeholder="Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <input className="w-full appearance-none border rounded py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
              type="text"
              name="phone"
              placeholder="Mobile phone"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          <h3 className="mt-12 font-semibold ">Billing Contact</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Provide the email address that will recieve invoices
          </p>
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="Email"
            name="billingEmail"
            value={inputs.billingEmail || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <h3 className="mt-12 font-semibold ">Address</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Use the search field below to find the shop on Google Maps.
          </p>
          {/* Need to change to map */}

          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="Address"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className="mt-1.5 text-xs font-medium py-2">
            If it is difficult to find the location, please provide additional directions
          </p>
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="E.g. Once you reach end of the street, you will find us at the right corner"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <h3 className="mt-12 font-semibold ">Regular Opening Hours</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Indicate your weekly opening hours so customers know when they can drop their bags in your shop
          </p>
          {/* Need to change to calendar */}
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="OpeningHours"
            name="openingHours"
            value={inputs.openingHours || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <h3 className="mt-12 font-semibold ">Images</h3>
          <p className="mt-1.5 text-xs font-medium py-2">
            Upload one or more images of the shop, preferably showing the street
          </p>
          {/* Need to change to calendar */}
          <input className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
            type="text"
            placeholder="OpeningHours"
            name="openingHours"
            value={inputs.openingHours || ""}
            onChange={handleChange}
          />
        </label>


        <input type="submit" />
      </form>
    )
  }


  const questions = () => {
    return (
      <div>
      </div>
      //         Confirmed
      // <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
      //   <div className="flex items-center mb-1 justify-between">
      //     <div className="flex space-x-3 items-center">
      //       <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
      //       <p className="rounded-md bg-text-dark text-text-main p-1.5 text-xs font-medium">
      //         Confirmed
      //       </p>
      //       <p className="rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium">
      //         Singapore
      //       </p>
      //     </div>
      //     <div className="flex items-center space-x-1">
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         fill="none"
      //         viewBox="0 0 24 24"
      //         strokeWidth={1.5}
      //         stroke="currentColor"
      //         className="w-5 h-5"
      //       >
      //         <path
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      //         />
      //       </svg>
      //       <p className="font-medium text-sm">1</p>
      //     </div>
      //   </div>
      //   <div>
      //     <p className="text-sm font-light">
      //       <span className="font-semibold">You</span> confirmed booking a
      //       minute ago
      //     </p>
      //   </div>
      // </div>
    );
  }

  // function for content in webpage
  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
            <div className="flex items-center mb-1 justify-between">
              <div className="flex space-x-3 items-center">
                <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
                <p className="rounded-md bg-text-dark text-text-main p-1.5 text-xs font-medium">
                  Confirmed
                </p>
                <p className="rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium">
                  Singapore
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="font-medium text-sm">1</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-light">
                <span className="font-semibold">You</span> confirmed booking a
                minute ago
              </p>
            </div>
          </div>
        );
      case 1:
        return <p>Completed bookings</p>;
      case 2:
        return <p>Cancelled bookings</p>;
      default:
        return <p>All bookings</p>;
    }
  };


  // the menu on top
  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">Add Location</p>
            </div>

            {/* Navigation */}

            <nav className="flex grow mt-4 sm:mt-0">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  onClick={() => setActiveMenuItem(0)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 0
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Active
                </li>
                <li
                  onClick={() => setActiveMenuItem(1)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 1
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Completed
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {/* {renderSwitch()} */}
        {questions()}
        {AddLocationForm()}
      </div>
    </div>
  );
};

export default AddLocation;

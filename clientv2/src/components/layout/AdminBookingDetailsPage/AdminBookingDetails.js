import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const AdminBookingDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

  const { bookingId } = useParams();
  const [booking, setBooking] = useState(data);
  const [user, setUser] = useState(data);
  const [listing, setListing] = useState(data);

  const statusStyle = {
    active: "row-span-2 rounded bg-green-400 p-3",
    inactive: "row-span-2 rounded bg-red-400 p-3",
  }

  useEffect(() => {
    async function fetchData() {
      const dbUrl = `http://localhost:6003/booking/${bookingId}`;
      const responseBooking = await fetch(dbUrl);

      if (!responseBooking.ok) {
        const message = `An error has occurred: ${responseBooking.statusText}`;
        window.alert(message);
        return;
      }

      const bookingRes = await responseBooking.json();
      console.log(bookingRes);
      if (!bookingRes) {
        window.alert(`Booking not found`);
        return;
      } else {
        setBooking(bookingRes);
      }

      const responseUser = await fetch(
        `http://localhost:6003/user/${bookingRes.user_id}`
      );
      const responseListing = await fetch(
        `http://localhost:6003/listing/${bookingRes.listing_id}`
      );

      console.log(responseUser);
      if (!responseUser.ok) {
        const message = `An error has occurred: ${responseUser.statusText}`;
        window.alert(message);
        return;
      }

      const userRes = await responseUser.json();
      if (!userRes) {
        window.alert(`User not found`);
        return;
      } else {
        setUser(userRes);
      }

      if (!responseListing.ok) {
        const message = `An error has occurred: ${responseListing.statusText}`;
        window.alert(message);
        return;
      }

      const listingRes = await responseListing.json();
      if (!responseListing) {
        window.alert(`Listing not found`);
        return;
      } else {
        setListing(listingRes);
      }
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Name and Actions */}
      <div className="shadow-md px-6 py-8">
        <div className="max-w-5xl md:max-w-3xl mx-auto sm:px-10">
          <button
            className="rounded-md bg-box-gray w-24 p-1.5 px-4 text-s font-medium inline-flex items-center"
            onClick={goBack}
          >
            <span>
              <ArrowLeftIcon className="fill-current w-6 h-6 mr-2" />
            </span>
            Back
          </button>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <h1 className="text-3xl font-semibold">Booking Details</h1>
          </div>
        </div>
      </div>

      {/* User details */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-8 text-text-dark">
        <div className="grid grid-rows-1 gap-4 divide-y divide-solid"> 
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l text-text-dark font-semibold">Payment Option</h4>
            <h4 className="text-l text-text-dark font-semibold">Start Date</h4>
            <h4 className="text-l text-text-dark font-semibold">End Date</h4>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l font-light">{booking.paynow ? "Flat Rate" : "Pay As You Go"}</h4>
            <h4 className="text-l font-light">
              {" "}
              {moment(booking.startDate).format("lll")}{" "}
            </h4>
            <h4 className="text-l font-light">
              {" "}
              {moment(booking.endDate).format("lll")}{" "}
            </h4>
          </div>
          <div className="py-4 row-span-2">
          <div className={booking.status === "Cancelled" ? statusStyle.inactive : statusStyle.active}>
              <p className="text-sm font-light text-white">Status</p>
                <h3 className="text-white font-semibold">{booking.status}</h3>
            </div>
          </div>
        </div>
        {/* Column Headings*/}
        <div className="py-8">
        <h1 className="text-2xl font-semibold">User Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l text-text-dark font-semibold">Name</h4>
            <h4 className="text-l text-text-dark font-semibold">
              Email Address
            </h4>
            <h4 className="text-l text-text-dark font-semibold">
              Phone Number
            </h4>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l font-light"> {user.name} </h4>
            <h4 className="text-l font-light"> {user.email} </h4>
            <h4 className="text-l font-light"> {user.phone} </h4>
          </div>
        </div>
        </div>

       <div className="py-8"> 
        <h1 className="text-2xl font-semibold">Listing Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l text-text-dark font-semibold">Name</h4>
            <h4 className="text-l text-text-dark font-semibold">Address</h4>
            <h4 className="text-l text-text-dark font-semibold">About</h4>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-3 gap-4 py-4">
            <h4 className="text-l font-light"> {listing.name} </h4>
            <h4 className="text-l font-light"> {listing.address} </h4>
            <h4 className="text-l font-light"> {listing.about} </h4>
          </div>
        </div>
        </div>
        {/* Summary */}
        <div className="bg-box-gray p-8">
          <h3 className="text-3xl text-text-dark font-semibold mb-6">
            Booking Summary
          </h3>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-text-dark font-light">
              Storage, pay as you go x 1 bag
            </p>
            <p className="text-sm text-text-dark font-light">$0.95/hour</p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-text-dark font-light">Service fee</p>
            <p className="text-sm text-text-dark font-light">$0.95</p>
          </div>{" "}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-text-dark font-light">Insurance</p>
            <p className="text-sm text-text-dark font-light">+ $0.35</p>
          </div>
          <div className="h-[1px] w-full bg-gray-200 mx-auto mb-6"></div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg text-text-dark font-bold">Total</p>
            <p className="text-lg text-text-dark font-bold">$7.50</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

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

export default AdminBookingDetails;

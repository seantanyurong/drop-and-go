import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const ListingDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const dbUrl = `https://is3106-dropandgo.herokuapp.com/listing/${listingId}`;
      const responseListing = await fetch(dbUrl);

      if (!responseListing.ok) {
        const message = `An error has occurred: ${responseListing.statusText}`;
        window.alert(message);
        return;
      }

      const listingRes = await responseListing.json();
      if (!listingRes) {
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
            <h1 className="text-3xl font-semibold"> {listing?.name} </h1>
            <div className="flex justify-end space-x-4"></div>
          </div>
        </div>
      </div>
      {/* User details */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-2 text-text-dark">
        {/* Column Headings*/}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="grid grid-rows-4 gap-4">
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="name"
            >
              Address
            </label>
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="email"
            >
              Postal Code
            </label>
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="phoneNumber"
            >
              Price Per Day
            </label>
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="phoneNumber"
            >
              Price Per Hour
            </label>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-4 gap-4">
            <h4 className="text-l font-light"> {listing?.address} </h4>
            <h4 className="text-l font-light"> {listing?.postal} </h4>
            <h4 className="text-l font-light"> ${listing?.pricePerDay[0]} </h4>
            <h4 className="text-l font-light"> ${listing?.pricePerHour[0]} </h4>
          </div>
          <div className="grid grid-rows-5 gap-4">
            <div className="row-span-2 rounded bg-cyan-400 p-3">
              <p className="text-sm font-light text-white">Join Date</p>
              <h3 className="text-white font-semibold">
                {moment(listing?.dateListed).format("DD/MM/YYYY")}
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-4">
          <h4 className="text-l py-2 text-text-dark font-semibold">About</h4>
          <h4 className="col-span-2 text-l font-light"> {listing?.about} </h4>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;

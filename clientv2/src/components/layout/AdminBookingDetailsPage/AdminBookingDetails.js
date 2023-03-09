import React from "react";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const AdminBookingDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

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
            <h1 className="text-3xl font-semibold">Booking 1</h1>
            <div className="flex justify-end space-x-4"></div>
          </div>
        </div>
      </div>

      {/* User details */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-8 text-text-dark">
        {/* Progress bar */}
        <div className="grid grid-cols-3" >
        <div className="grid grid-rows-2 flex justify-items-center mb-10">
          <CheckCircleIcon
            className="h-10 w-10 text-emerald-400"
            aria-hidden="true"
          />
          <h4 className="font-semibold text-lg text-gray-300">
            Booked
          </h4>
        </div>
        <div className="grid grid-rows-2 flex justify-items-center mb-10">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Luggage Handed Over</h4>
        </div>
        <div className="grid grid-rows-2 flex justify-items-center mb-10">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Luggage Reclaimed</h4>
        </div>
        </div>

        {/* Column Headings*/}
        <h1 className="text-2xl font-semibold">User Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l text-text-dark font-semibold">Name</h4>
            <h4 className="text-l text-text-dark font-semibold">
              Email Address
            </h4>
            <h4 className="text-l text-text-dark font-semibold">
              Phone Number
            </h4>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l font-light">Nevan Ng</h4>
            <h4 className="text-l font-light">nevan@mail.com</h4>
            <h4 className="text-l font-light">9123 4567</h4>
          </div>
        </div>

        <h1 className="text-2xl font-semibold">Location Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l text-text-dark font-semibold">Name</h4>
            <h4 className="text-l text-text-dark font-semibold">
              Email Address
            </h4>
            <h4 className="text-l text-text-dark font-semibold">
              Phone Number
            </h4>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l font-light">Nevan Ng</h4>
            <h4 className="text-l font-light">nevan@mail.com</h4>
            <h4 className="text-l font-light">9123 4567</h4>
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
  );
};

export default AdminBookingDetails;

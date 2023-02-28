import React from "react";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/20/solid";

const UserBookingDetails = () => {
  return (
    <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
      {/* Location details */}
      <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
        <div className="flex items-center mb-1 justify-between">
          <div className="flex space-x-3 items-center">
            <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-semibold text-primary-200">
              Get Directions
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-light">
            Wet Designs Pte Ltd, 22 New Industrial Road #06-11 Primax
          </p>
          <div className="flex items-center mt-1">
            <p className="text-sm font-light">4.7</p>
            <StarIcon
              className="h-4 w-4 ml-1 text-yellow-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-md bg-box-gray p-1.5 px-4 text-xs font-medium">
          Cancel Booking
        </button>
      </div>
      <h3 className="text-xl text-text-dark font-semibold py-6">
        Your booking timeline
      </h3>

      {/* Progress bar */}
      <div>
        <div className="flex space-x-4 items-center mb-10">
          <CheckCircleIcon
            className="h-10 w-10 text-emerald-400"
            aria-hidden="true"
          />
          <h4 className="font-semibold text-lg text-gray-300">
            Booking for 1 Bag today at Wet Designs Pte Ltd
          </h4>
        </div>
        <div className="flex space-x-4 items-center mb-10">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Hand over your luggage</h4>
        </div>
        <div className="flex space-x-4 items-center mb-10">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Reclaim your baggage</h4>
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

export default UserBookingDetails;

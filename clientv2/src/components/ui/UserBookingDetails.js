import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const UserBookingDetails = () => {
  return (
    <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
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
        <div className="flex space-x-4 items-center mb-6">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">
            Booking for 1 Bag today at Wet Designs Pte Ltd
          </h4>
        </div>
        <div className="flex space-x-4 items-center mb-6">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Hand over your luggage</h4>
        </div>
        <div className="flex space-x-4 items-center mb-6">
          <CheckCircleIcon className="h-10 w-10" aria-hidden="true" />
          <h4 className="font-semibold text-lg">Reclaim your baggage</h4>
        </div>

        {/* Summary */}
        <div className="bg-box-gray p-8">
          <h3 className="text-3xl text-text-dark font-semibold mb-6">
            Booking Summary
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-md text-text-dark font-light">
              Storage, pay as you go x 1 bag
            </p>
            <p className="text-md text-text-dark font-light">$0.95/hour</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-md text-text-dark font-light">
              Storage, pay as you go x 1 bag
            </p>
            <p className="text-md text-text-dark font-light">$0.95/hour</p>
          </div>{" "}
          <div className="flex items-center justify-between">
            <p className="text-md text-text-dark font-light">
              Storage, pay as you go x 1 bag
            </p>
            <p className="text-md text-text-dark font-light">$0.95/hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingDetails;

import React from "react";
import {
  StarIcon,
  XCircleIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/20/solid";

const BookingForm = () => {
  return (
    <div className="">
      <div className="z-20 relative max-w-5xl md:max-w-2xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        <div className="border-[1px] border-border-mainrounded-md mb-4 shadow-md ">
          {/* Top Section */}
          <div className="bg-box-gray p-8">
            <div className=" flex items-center mb-1 justify-between">
              <div className="flex space-x-3 items-center">
                <h3 className="font-semibold">Wet Designs</h3>
              </div>
              <div className="flex items-center space-x-1">
                <XCircleIcon className="h-10 w-10 ml-1 " aria-hidden="true" />
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
          {/* Options */}
          <div className="p-8 bg-white">
            {/* Calendar */}
            <div className="flex space-x-6">
              <div className="flex-auto border-[1px] border-border-main px-3 py-1 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-box-hover">
                <div className="flex items-center mb-1 justify-between">
                  <div className="flex space-x-3 items-center">
                    <h3 className="text-sm">Drop off</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon
                      className="h-6 w-6 ml-1 "
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold">06 Mar</p>
                  <div className="flex items-center mt-1">
                    <CheckCircleIcon
                      className="h-4 w-4  text-green-300"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold ml-1">Open</p>
                  </div>
                </div>
              </div>
              <div className="flex-auto border-[1px] border-border-main px-3 py-1 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-box-hover">
                <div className="flex items-center mb-1 justify-between">
                  <div className="flex space-x-3 items-center">
                    <h3 className="text-sm">Drop off</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon
                      className="h-6 w-6 ml-1 "
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold">06 Mar</p>
                  <div className="flex items-center mt-1">
                    <CheckCircleIcon
                      className="h-4 w-4  text-green-300"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold ml-1">Open</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-light">
              Choose your dates. You can cancel your booking until midnight the
              day before arrival.
            </p>

            {/* Number of bags */}

            <div className="flex items-center mt-10 justify-between">
              <div className="">
                <h3 className="text-2xl text-text-dark font-semibold mb-1">
                  How many bags?
                </h3>
                <p className="text-sm font-light">
                  Suitcases, backpacks, shopping bags — we're not picky!
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MinusCircleIcon className="h-7 w-7 ml-1 " aria-hidden="true" />
                <h3 className="text-4xl text-text-dark font-semibold ">1</h3>
                <PlusCircleIcon className="h-7 w-7 ml-1 " aria-hidden="true" />
              </div>
            </div>

            {/* Payment Type */}
            <div className="flex space-x-6 mt-10">
              <div className="flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer">
                <h3 className="text-sm font-semibold">Pay-as-you-go</h3>
                <p className="text-xs font-light">
                  Hourly pricing for short term storage
                </p>
              </div>
              <div className="flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer">
                <h3 className="text-sm font-semibold">Flat rate</h3>
                <p className="text-xs font-light">
                  Pay less when storing longer
                </p>
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
            <button className="rounded-3xl bg-orange-500 text-white p-1.5 px-4 font-medium w-full">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

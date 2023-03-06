import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const goBack = () =>{
        let path = "/admin/dashboard";
        navigate(path);
    }
  return (
    <div>
      {/* Name and Actions */}
      <div className="shadow-md px-6 py-8">
        <div className="max-w-5xl md:max-w-3xl mx-auto sm:px-10">
          <button className="rounded-md bg-box-gray w-24 p-1.5 px-4 text-s font-medium inline-flex items-center"
          onClick={goBack} >
            <span>
              <ArrowLeftIcon className="fill-current w-6 h-6 mr-2" />
            </span>
            Back
          </button>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <h1 className="text-3xl font-semibold">Nevan Ng</h1>
            <div className="flex justify-end space-x-4">
              <button className="rounded-md bg-box-gray w-30 p-3 px-4 text-s font-medium">
                Edit User
              </button>
              <button className="rounded-md bg-red-500 w-30 text-white p-3 text-s font-medium">
                Delete User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User details */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-8 text-text-dark">
        {/* Column Headings*/} 
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l text-text-dark font-semibold">Name</h4>
            <h4 className="text-l text-text-dark font-semibold">Email Address</h4>
            <h4 className="text-l text-text-dark font-semibold">Phone Number</h4>
          </div>
          {/* Actual Data */} 
          <div className="grid grid-rows-4 gap-4 py-8">
            <h4 className="text-l font-light">Nevan Ng</h4>
            <h4 className="text-l font-light">nevan@mail.com</h4>
            <h4 className="text-l font-light">9123 4567</h4>
          </div>
          <div className="grid grid-rows-4 gap-4 py-8">
            <div className="row-span-2 rounded bg-cyan-400 p-3">
              <p className="text-sm font-light text-white">Join Date</p>
              <h3 className="text-white font-semibold">17 Feb 2020</h3>
            </div>
            <div className="row-span-2 rounded bg-green-400 p-3">
              <p className="text-sm font-light text-white">Status</p>
              <h3 className="text-white font-semibold">Active</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDetails;

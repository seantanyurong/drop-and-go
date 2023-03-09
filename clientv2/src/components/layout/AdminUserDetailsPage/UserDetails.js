import React from "react";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

  const initialState = {
    name: "Nevan Ng",
    email: "nevan@mail.com",
    phoneNumber: "91234567",
    joinDate: "17 Feb 2020",
    status: "Active",
  };

  const [formState, setFormState] = useState(initialState);
  const [editState, setEditState] = useState(false);
  const handleChange = ({ target: { value, id } }) => {
    setFormState({ ...formState, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditState(false);
  };
  const formStyle = {
    active:
      "shadow appearance-none border rounded w-full px-3 text-gray-700 focus:outline-none focus:shadow-outline",
    inactive: "text-l font-light py-2 px-3",
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
            <h1 className="text-3xl font-semibold">{formState.name}</h1>
            <div className="flex justify-end space-x-4">
              <button
                className="rounded-md bg-box-gray w-30 p-3 px-4 text-s font-medium"
                onClick={() => setEditState(true)}
              >
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
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-2 text-text-dark">
        {/* Column Headings*/}
        <form className="grid grid-cols-3 gap-4 py-8" onSubmit={handleSubmit}>
          <div className="grid grid-rows-4 gap-4">
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-4 gap-4">
            <input
              className={editState ? formStyle.active : formStyle.inactive}
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className={editState ? formStyle.active : formStyle.inactive}
              id="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className={editState ? formStyle.active : formStyle.inactive}
              id="phoneNumber"
              type="text"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
            
          </div>
          <div className="grid grid-rows-5 gap-4">
            <div className="row-span-2 rounded bg-cyan-400 p-3">
              <p className="text-sm font-light text-white">Join Date</p>
              <h3 className="text-white font-semibold">{formState.joinDate}</h3>
            </div>
            <div className="row-span-2 rounded bg-green-400 p-3">
              <p className="text-sm font-light text-white">Status</p>
              { editState ? 
              <select
                className="block w-full border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="status"
                disabled={!editState}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
              : 
              <h3 className="text-white font-semibold">{formState.status}</h3> 
}
            </div>
            
          </div>
          {editState && (
            <div className="grid grid-cols-2 col-start-3">
              <button
                className="rounded-md bg-box-gray w-20 p-1.5 text-xs font-medium"
                onClick={() => setEditState(false)}
              >
                Cancel
              </button>
              <button className="rounded-md bg-green-500 w-20 text-white p-1.5 text-xs font-medium"
              type="submit">
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserDetails;

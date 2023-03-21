import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

  const defaultState = {
    name: "Nevan Ng",
    email: "nevan@mail.com",
    phone: "91234567",
    joinDate: "17 Feb 2020",
    status: "Active",
  };

  const [formState, setFormState] = useState(defaultState);
  const [initialState, setInitialState] = useState(defaultState);
  const { userId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:6003/user/${userId}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const userRes = await response.json();
      if (!userRes) {
        window.alert(`User with id ${userId} not found`);
        return;
      } else {
        setFormState(userRes);
        setInitialState(initialState);
      }
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  const [editState, setEditState] = useState(false);
  
  const handleChange = ({ target: { value, id } }) => {
    setFormState({ ...formState, [id]: value });
  };
 const handleCancel = () => {
    setEditState(false);
    setFormState(initialState); 
};
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditState(false);

    let body = {
      "name": formState.name,
      "email": formState.email,
      "phone": formState.phone,
      "status": formState.status
    }

    async function updateData() {
      const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
      console.log("body" + JSON.stringify(body));
      const response = await fetch(`http://localhost:6003/user/update/${userId}`, settings)

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const userRes = await response.json();
      if (!userRes) {
        window.alert(`User with id ${userId} not found`);
        return;
      }
     
    }
    updateData();
    setInitialState(formState);
  };
  const formStyle = {
    active:
      "shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline",
    inactive: "text-l font-light py-2 px-3 focus:outline-none",
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
              readOnly={!editState}
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className={editState ? formStyle.active : formStyle.inactive}
              readOnly={!editState}
              id="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className={editState ? formStyle.active : formStyle.inactive}
              readOnly={!editState}
              id="phone"
              type="number"
              value={formState.phone}
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
                onChange={handleChange}
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
                onClick={handleCancel}
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
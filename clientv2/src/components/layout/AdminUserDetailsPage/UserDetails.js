import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

const UserDetails = ({ entityType }) => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };

  const defaultState = {
    name: "",
    email: "",
    phone: "",
    joinDate: "",
    status: "",
    bankAccount: "",
  };

  const [formState, setFormState] = useState(defaultState);
  const { userId, providerId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const dbUrl =
        entityType === "User"
          ? `http://localhost:6003/user/${userId}`
          : `http://localhost:6003/provider/${providerId}`;
      const response = await fetch(dbUrl);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`User/Provider not found`);
        return;
      } else {
        setFormState(res);
      }
    }
    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  const phoneRegExp = "(6|8|9)[0-9]{7}";
  const userDetailsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(32, "Name exceeds 32 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Address is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone Number is not valid")
      .required("Phone Number is required"),
    status: Yup.string().required("Status is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formState,

    onSubmit: function (values) {
      handleSubmit();
    },

    validationSchema: userDetailsSchema,
  });

  const [editState, setEditState] = useState(false);

  const handleChange = ({ target: { value, id } }) => {
    setFormState({ ...formState, [id]: value });
    formik.handleChange();
  };
  const handleCancel = () => {
    setEditState(false);
    formik.handleReset();
  };
  const handleSubmit = (e) => {
    setEditState(false);

    let body = {
      name: formik.values.name,
      email: formik.values.email,
      phone: formik.values.phone,
      status: formik.values.status,
      bankAccount: formik.values.bankAccount,
    };

    async function updateData() {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      console.log("body" + JSON.stringify(body));

      let dbUrl =
        entityType === "User"
          ? `http://localhost:6003/user/update/${userId}`
          : `http://localhost:6003/provider/update/${providerId}`;

      const response = await fetch(dbUrl, settings);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const res = await response.json();
      if (!res) {
        window.alert(`User/Provider not found`);
        return;
      }
    }
    updateData();
  };
  const formStyle = {
    active: `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.name && formik.errors.name
        ? "border-red-400 text-red-400"
        : "border-gray-300"
      }`,
    inactive: "text-l font-light py-2 px-3 focus:outline-none",
  };

  const statusStyle = {
    active: "row-span-2 rounded bg-green-400 p-3",
    inactive: "row-span-2 rounded bg-red-400 p-3",
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
            <h1 className="text-3xl font-semibold">{formik.values.name}</h1>
            <div className="flex justify-end space-x-4">
              <button
                className="rounded-md bg-box-gray w-30 p-3 px-4 text-s font-medium"
                onClick={() => setEditState(true)}
              >
                Edit {entityType}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User details */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-6 sm:px-10 py-2 text-text-dark">
        {/* Column Headings*/}
        <form
          className="grid grid-cols-3 gap-4 py-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-rows-4 gap-4">
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            {formik.touched.name && formik.errors.name && <br />}
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>
            {formik.touched.email && formik.errors.email && <br />}
            <label
              className="text-l py-2 text-text-dark font-semibold"
              htmlFor="phone"
            >
              Phone Number
            </label>
            {formik.touched.phone && formik.errors.phone && <br />}
            {entityType === "Provider" && (
              <label
                className="text-l py-2 text-text-dark font-semibold"
                htmlFor="bankAccount"
              >
                Bank Account
              </label>
            )}
          </div>
          {/* Actual Data */}
          <div className="grid grid-rows-4 gap-4">
            <input
              className={
                editState
                  ? `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.name && formik.errors.name
                    ? "border-red-400 text-red-400"
                    : "border-gray-300"
                  }`
                  : formStyle.inactive
              }
              readOnly={!editState}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.name}
              </p>
            )}
            <input
              className={
                editState
                  ? `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.email && formik.errors.email
                    ? "border-red-400 text-red-400"
                    : "border-gray-300"
                  }`
                  : formStyle.inactive
              }
              readOnly={!editState}
              id="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-xs italic">
                {formik.errors.email}
              </span>
            )}
            <input
              className={
                editState
                  ? `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.phone && formik.errors.phone
                    ? "border-red-400 text-red-400"
                    : "border-gray-300"
                  }`
                  : formStyle.inactive
              }
              readOnly={!editState}
              id="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-500 text-xs italic">
                {formik.errors.phone}
              </span>
            )}
            {entityType === "Provider" && (
              <input
                className={editState ? formStyle.active : formStyle.inactive}
                readOnly={!editState}
                id="bankAccount"
                type="number"
                value={formState.phone}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="grid grid-rows-5 gap-4">
            <div className="row-span-2 rounded bg-cyan-400 p-3">
              <p className="text-sm font-light text-white">Join Date</p>
              <h3 className="text-white font-semibold">
                {moment(formState.joinDate).format("DD/MM/YYYY")}
              </h3>
            </div>
            <div
              className={
                formState.status === "Active"
                  ? statusStyle.active
                  : statusStyle.inactive
              }
            >
              <p className="text-sm font-light text-white">Status</p>
              {editState ? (
                <select
                  className="block w-full border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="status"
                  disabled={!editState}
                  onChange={handleChange}
                  value={formState.status}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              ) : (
                <h3 className="text-white font-semibold">{formState.status}</h3>
              )}
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
              <button
                className="rounded-md bg-green-500 w-20 text-white p-1.5 text-xs font-medium"
                type="submit"
              >
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

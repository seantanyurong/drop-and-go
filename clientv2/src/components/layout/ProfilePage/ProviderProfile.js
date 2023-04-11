import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProviderProfile = () => {
  const navigate = useNavigate();
  const goBack = () => {
    let path = "/provider/view-locations";
    navigate(path);
  };
  const credentials = {
    loggedIn: "",
    id: "",
  };

  const defaultState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    bankAccount: "",
  };

  const [formState, setFormState] = useState(defaultState);
  const [editState, setEditState] = useState(false);
  const [authState, setAuthState] = useState(credentials);

  const phoneRegExp = "(6|8|9)[0-9]{7}";
  const providerDetailsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(32, "Name exceeds 32 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Address is required"),
    password: Yup.string().required("Password is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone Number is not valid")
      .required("Phone Number is required"),
    bankAccount: Yup.string()
      .required("Bank Account is required")
      .min(3, "Bank Account must have at least 3 characters"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formState,

    onSubmit: function (values) {
      handleSubmit();
    },

    validationSchema: providerDetailsSchema,
  });

  const handleCancel = () => {
    setEditState(false);
    formik.handleReset();
  };

  const handleSubmit = (e) => {
    setEditState(false);

    let body = {
      name: formik.values.name,
      email: formik.values.email,
      password: formik.values.password,
      phone: formik.values.phone,
      bankAccount: formik.values.bankAccount,
    };

    async function updateData() {
      console.log("Submitting");

      const providerId = authState.id;
      console.log(providerId);

      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      console.log("body" + JSON.stringify(body));
      const responseUpdate = await fetch(
        `http://localhost:6003/provider/update/${providerId}`,
        settings
      );

      if (!responseUpdate) {
        const message = `An error has occurred: ${responseUpdate.message}`;
        window.alert(message);
        return;
      }

      const updateRes = await responseUpdate.json();
      if (!updateRes) {
        window.alert(`Provider with id ${providerId} not found`);
        return;
      }
    }

    updateData();
  };

  const formStyle = {
    active:
      "shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline",
    inactive: "text-l font-light py-4 px-3 focus:outline-none",
  };

  useEffect(() => {
    async function fetchData() {
      console.log("Check If Logged In");
      const settings = {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      };

      const responseAuth = await fetch(
        "http://localhost:6003/provider/authenticate",
        settings
      );

      if (!responseAuth) {
        const message = `An error has occurred: ${responseAuth.message}`;
        window.alert(message);
        return;
      }

      const authRes = await responseAuth.json();
      console.log(authRes);

      if (!authRes) {
        const message = `An error has occurred: ${authRes.message}`;
        window.alert(message);
        return;
      } else {
        setAuthState(authRes);
      }

      console.log("Fetch Data Triggered");
      const responseDetails = await fetch(
        `http://localhost:6003/provider/${authRes.id}`
      );

      if (!responseDetails) {
        const message = `An error has occurred: ${responseDetails.message}`;
        window.alert(message);
        return;
      }

      const detailsRes = await responseDetails.json();
      console.log(detailsRes);

      if (!detailsRes) {
        const message = `An error has occurred: ${detailsRes.message}`;
        window.alert(message);
        return;
      } else {
        setFormState(detailsRes);
      }
    }

    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
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
            <h1 className="text-3xl font-semibold">Profile Information</h1>
            <div className="flex justify-end space-x-4">
              <button
                className="rounded-md bg-box-gray w-30 p-3 px-4 text-s font-medium"
                onClick={() => setEditState(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-10 sm:px-5 py-2 text-text-dark">
          <form className="grid grid-cols-2 py-8" onSubmit={formik.handleSubmit}>
            <div className="grid grid-rows-5 gap-4">
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
                htmlFor="password"
              >
                Password
              </label>
              {formik.touched.password && formik.errors.password && <br />}
              <label
                className="text-l py-2 text-text-dark font-semibold"
                htmlFor="phone"
              >
                Phone Number
              </label>
              {formik.touched.phone && formik.errors.phone && <br />}
              <label
                className="text-l py-2 text-text-dark font-semibold"
                htmlFor="bankAccount"
              >
                Bank Account
              </label>
              {formik.touched.bankAccount && formik.errors.bankAccount && <br />}
            </div>

            <div className="grid grid-rows-5 gap-4">
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.email}
                </p>
              )}
              <input
                className={
                  editState
                    ? `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.password && formik.errors.password
                      ? "border-red-400 text-red-400"
                      : "border-gray-300"
                    }`
                    : formStyle.inactive
                }
                readOnly={!editState}
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.password}
                </p>
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
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.phone}
                </p>
              )}
              <input
                className={
                  editState
                    ? `shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline ${formik.touched.bankAccount && formik.errors.bankAccount
                      ? "border-red-400 text-red-400"
                      : "border-gray-300"
                    }`
                    : formStyle.inactive
                }
                readOnly={!editState}
                id="bankAccount"
                type="text"
                value={formik.values.bankAccount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.bankAccount && formik.errors.bankAccount && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.bankAccount}
                </p>
              )}
            </div>
            <div className="pt-8 flex col-start-2 justify-end space-x-6">
              {editState && (
                <div className="grid grid-cols-2 gap-4 col-start-3">
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

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;

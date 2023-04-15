import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {

    let defaultState = {
        name: "",
        email: "",
        password: "",
        reenterPassword: "",
        phone: "",
        joinDate: new Date(),
    }

    let navigate = useNavigate();

    const [formState, setFormState] = useState(defaultState);
    const [showModal, setShowModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = ({ target: { value, id } }) => {
        setFormState({ ...formState, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let body = {
            name: formState.name,
            email: formState.email,
            password: formState.password,
            reenterPassword: formState.reenterPassword,
            phone: formState.phone,
            joinDate: new Date(),
        }
        async function confirmSignup() {
            console.log("Submitting");

            const settings = {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };

            console.log("body" + JSON.stringify(body));
            const responseCreate = await fetch("https://is3106-dropandgo.herokuapp.com/user/add", settings);

            if (!responseCreate) {
                const message = `An error has occurred: ${responseCreate.message}`;
                window.alert(message);
                return;
            }

            const createRes = await responseCreate.json();
            console.log(createRes);
            if (!createRes.acknowledged) {
                const message = `An error has occurred: ${createRes.message}`;
                // window.alert(message);
                setErrorMessage(message);
                setErrorModal(true);
                return;
            } else {
                setShowModal(true);
            }
        }

        confirmSignup();
    };

    return (
        <div className="mt-10 ml-5 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <span className="m-5">
                            <h1 className="text-2xl text-center font-semibold leading-6 text-gray-900">
                                Enter Your Personal Information
                            </h1>
                            <br />
                            <p className="mt-1 text-sm text-center text-gray-600">
                                By continuing you agree to our terms and conditions.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form onSubmit={handleSubmit} action="/login/user" >
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Name
                                        </label>
                                        <input
                                            value={formState.name}
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            required className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Name"
                                        ></input>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            value={formState.email}
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            required className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Email Address"
                                        ></input>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Password
                                        </label>
                                        <input
                                            value={formState.password}
                                            onChange={handleChange}
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            required className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Password"
                                        ></input>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="reenter-password"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Re-Enter Password
                                        </label>
                                        <input
                                            value={formState.reenterPassword}
                                            onChange={handleChange}
                                            type="password"
                                            name="reenterPassword"
                                            id="reenterPassword"
                                            autoComplete="password"
                                            required className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Re-Enter Password"
                                        ></input>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            value={formState.phone}
                                            onChange={handleChange}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="phone"
                                            required className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Phone Number"
                                        ></input>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    id="create"
                                    type="submit"
                                    className="inline-flex justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    id="my-modal"
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                >
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Successful!
                            </h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Account has been successfully created!
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={() => navigate(`/login/user`)}
                                    id="loginButton"
                                    className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                                >
                                    Proceed To Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {errorModal && (
                <div
                    id="error-modal"
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                >
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <svg
                                    className="h-6 w-6 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Failed in creating an account!
                            </h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    {errorMessage}
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={() => setErrorModal(false)}
                                    id="loginButton"
                                    className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default UserSignUp;
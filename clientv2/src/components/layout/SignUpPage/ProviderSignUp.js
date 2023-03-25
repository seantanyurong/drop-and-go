import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProviderSignUp = () => {

    let defaultState = {
        name: "",
        email: "",
        password: "",
        reenterPassword: "",
        phone: "",
        bank: "",
        joinDate: new Date(),
    }

    let navigate = useNavigate();

    const [formState, setFormState] = useState(defaultState);
    const [showModal, setShowModal] = useState(false);

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
            bank: formState.bank,
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
            const response = await fetch("http://localhost:6003/provider/add", settings);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        }

        confirmSignup();
    };

    return (
        <div class="mt-10 ml-5 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <span class="m-5">
                            <h1 class="text-2xl text-center font-semibold leading-6 text-gray-900">Enter Your Personal Information</h1>
                            <br />
                            <p class="mt-1 text-sm text-center text-gray-600">By continuing you agree to our terms and conditions. </p>
                            <br />
                            <br />
                            <div class="text-sm text-center">
                                <a href="/faq" class="font-medium text-indigo-600 hover:text-indigo-500">Frequently Asked Questions</a>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form onSubmit={handleSubmit} action="/login/provider" >
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                        <input value={formState.name} onChange={handleChange}
                                            type="text" name="name" id="name" autocomplete="given-name" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                                        <input value={formState.email} onChange={handleChange}
                                            type="text" name="email" id="email" autocomplete="email" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email Address"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <input value={formState.password} onChange={handleChange}
                                            type="password" name="password" id="password" autocomplete="password" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="reenter-password" class="block text-sm font-medium leading-6 text-gray-900">Re-Enter Password</label>
                                        <input value={formState.reenterPassword} onChange={handleChange}
                                            type="password" name="reenterPassword" id="reenterPassword" autocomplete="password" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Re-Enter Password"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                                        <input value={formState.phone} onChange={handleChange}
                                            type="text" name="phone" id="phone" autocomplete="phone" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone Number"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="bank-account" class="block text-sm font-medium leading-6 text-gray-900">Bank Account Number</label>
                                        <input value={formState.bank} onChange={handleChange}
                                            type="text" name="bank" id="bank" autocomplete="bank" required class="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Account Number"></input>
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <select id="country" name="country" autocomplete="country-name" class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option>Singapore</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button /* onClick={ setShowModal(true) } */
                                    id="create" type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal */}
            <div id="my-modal" class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" >
                <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" >
                    <div class="mt-3 text-center">
                        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100" >
                            <svg
                                class="h-6 w-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                        </div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Successful!</h3>
                        <div class="mt-2 px-7 py-3">
                            <p class="text-sm text-gray-500">
                                Account has been successfully created!
                            </p>
                        </div>
                        <div class="items-center px-4 py-3">
                            <button onClick={() => navigate(`/login/provider`)}
                                id="loginButton"
                                class="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                Proceed To Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProviderSignUp;
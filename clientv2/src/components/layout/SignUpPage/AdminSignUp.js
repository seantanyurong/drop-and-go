import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignUp = () => {

    let defaultState = {
        name: "",
        email:"",
        password: "",
        reenterPassword: "",
        joinDate: new Date(),
    }

    let navigate = useNavigate();
    
    const [formState, setFormState] = useState(defaultState);

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
            const response = await fetch("http://localhost:6003/admin/add", settings);
            
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        }

        confirmSignup();
        navigate(`/login/admin`);
    };

    return (
        <div class="mt-10 ml-5 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <span class="m-5">
                        <h1 class="text-2xl text-center font-semibold leading-6 text-gray-900">Enter Your Personal Information</h1>
                        <br/>
                        <p class="mt-1 text-sm text-center text-gray-600">Strictly Only For Creation Of Administrator Accounts. </p>
                        <br/>
                        <br/>
                    </span>
                </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleSubmit} action="/login/admin" >
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
                               
                            </div>
                        </div>

                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default AdminSignUp;
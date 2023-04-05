import React from 'react';
import { useState, useEffect } from "react";

const ProviderProfile = () => {

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
    const [initialState, setInitialState] = useState(defaultState);
    const [editState, setEditState] = useState(false);
    const [authState, setAuthState] = useState(credentials);

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
            name: formState.name,
            email: formState.email,
            password: formState.password,
            phone: formState.phone,
            bankAccount: formState.bankAccount,
        }

        async function updateData() {
            console.log("Submitting");

            const providerId = authState.id;
            console.log(providerId);

            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };

            console.log("body" + JSON.stringify(body));
            const responseUpdate = await fetch(`http://localhost:6003/provider/update/${providerId}`, settings)
    
            if (!responseUpdate) {
                const message = `An error has occurred: ${responseUpdate.statusText}`;
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
        setInitialState(formState);
    };

    const formStyle = {
        active: "shadow appearance-none border rounded w-full px-3 text-gray-700 focus:shadow-outline",
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

            const responseAuth = await fetch("http://localhost:6003/provider/authenticate", settings);

            if (!responseAuth) {
                const message = `An error has occurred: ${responseAuth.statusText}`;
                window.alert(message);
                return;
            }

            const authRes = await responseAuth.json();
            console.log(authRes);

            if (!authRes) {
                const message = `An error has occurred: ${authRes.statusText}`;
                window.alert(message);
                return;
            } else {
                setAuthState(authRes);
            }

            console.log("Fetch Data Triggered");
            const responseDetails = await fetch(`http://localhost:6003/provider/${authRes.id}`);
        
            if (!responseDetails) {
                const message = `An error has occurred: ${responseDetails.statusText}`;
                window.alert(message);
                return;
            }
        
            const detailsRes = await responseDetails.json();
            console.log(detailsRes);

            if (!detailsRes) {
                const message = `An error has occurred: ${detailsRes.statusText}`;
                window.alert(message);
                return;
            } else {
                setFormState(detailsRes);
                setInitialState(detailsRes);
            }
        }

        fetchData();
        return;
        // eslint-disable-next-line
    }, []);

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Profile Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
            </div>
            
            <div className="border-t border-gray-200">
                <div className="max-w-5xl md:max-w-3xl mx-auto px-10 sm:px-5 py-2 text-text-dark">
                    <form className="grid grid-cols-3 gap-0 py-8" onSubmit={handleSubmit}>
                        <div className="grid grid-rows-4 gap-4">
                            <label className="text-l py-2 text-text-dark font-semibold" htmlFor="name">
                                Name
                            </label>
                            <label className="text-l py-2 text-text-dark font-semibold" htmlFor="email">
                                Email Address
                            </label>
                            <label className="text-l py-2 text-text-dark font-semibold" htmlFor="password">
                                Password
                            </label>
                            <label className="text-l py-2 text-text-dark font-semibold" htmlFor="phone">
                                Phone Number
                            </label>
                            <label className="text-l py-2 text-text-dark font-semibold" htmlFor="bankAccount">
                                Bank Account
                            </label>
                        </div>

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
                                id="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <input
                                className={editState ? formStyle.active : formStyle.inactive}
                                readOnly={!editState}
                                id="phone"
                                type="text"
                                value={formState.phone}
                                onChange={handleChange}
                            />
                            <input
                                className={editState ? formStyle.active : formStyle.inactive}
                                readOnly={!editState}
                                id="bankAccount"
                                type="text"
                                value={formState.bankAccount}
                                onChange={handleChange}
                            />
                        </div>
                    </form>

                    <div className="md:grid md:grid-cols-1 md:gap-6">
                        <div className="flex justify-end space-x-6">
                            <button className="rounded-md bg-box-gray w-30 p-6 px-6 text-s font-medium" onClick={() => setEditState(true)}>
                                Edit Details
                            </button>
                            {editState && (
                                <div className="grid grid-cols-1 col-start-3">
                                    <button
                                        className="rounded-md bg-box-gray w-20 p-1.5 text-xs font-medium"
                                        onClick={handleCancel}>
                                        Cancel
                                    </button>
                                    <button 
                                        className="rounded-md bg-green-500 w-20 text-white p-1.5 text-xs font-medium"
                                        onClick={handleSubmit}>
                                        Save
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderProfile
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const ProviderLogin = () => {

    let defaultState = {
        email:"",
        password: "",
    }

    let navigate = useNavigate();
    
    const [formState, setFormState] = useState(defaultState);

    const handleChange = ({ target: { value, id } }) => {
        setFormState({ ...formState, [id]: value });
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let body = {
            email: formState.email,
            password: formState.password,
        }
        async function confirmLogin() {
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
            const response = await fetch("http://localhost:6003/provider/login", settings)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.token);
                    localStorage.setItem("token", data.token);

                    if (data.token) {
                        navigate("/");
                    } else {
                        window.alert("Incorrect Email or Password!");
                    }
                });
            
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        }

        confirmLogin();
    };

    useEffect(() => {
        async function checkIsLoggedIn() {
            console.log("Use Effect Triggered");
            const settings = {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            };

            const response = await fetch("http://localhost:6003/provider/authenticate", settings)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                    if (data.isLoggedIn) {
                        navigate("/");
                    }
                });

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        }

        checkIsLoggedIn();
    }, []);

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img 
                        className="mx-auto h-8" 
                        src={LogoImg} 
                        alt="Logo" 
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-900">Provider Log In</h2>
                </div>

                <form className="mt-8 space-y-8" action="/" onSubmit={handleSubmit} >
                    <input 
                        type="hidden" 
                        name="remember" 
                        value="true"
                    ></input>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="sr-only"
                            >
                                Email address
                            </label>
                            <input 
                                value={formState.email} 
                                onChange={handleChange}
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email"
                                required className="relative block w-full rounded-t-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Email Address"
                            ></input>
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="sr-only"
                            >
                                Password
                            </label>
                            <input 
                                value={formState.password} 
                                onChange={handleChange}
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required className="relative block w-full rounded-b-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Password"
                            ></input>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                id="remember-me" 
                                name="remember-me" 
                                type="checkbox" 
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            ></input>
                            <label 
                                htmlFor="remember-me" 
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember Me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a 
                                href="/signup/provider" 
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Don't Have An Account?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg 
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor" 
                                    aria-hidden="true"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </span>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProviderLogin;
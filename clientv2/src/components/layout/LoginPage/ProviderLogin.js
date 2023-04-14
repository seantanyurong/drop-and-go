import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const ProviderLogin = () => {

    const credentials = {
        loggedIn: "",
        id: "",
    };

    let defaultState = {
        email:"",
        password: "",
    }

    let navigate = useNavigate();
    
    const [formState, setFormState] = useState(defaultState);
    const [authState, setAuthState] = useState(credentials);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = ({ target: { value, id } }) => {
        setFormState({ ...formState, [id]: value });
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let body = {
            email: formState.email,
            password: formState.password,
        };
        
        async function confirmLogin() {
            console.log("Submitting");

            const providerId = authState.id;
            console.log(providerId);

            const settings = {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };
            
            console.log("body" + JSON.stringify(body));
            const responseLogin = await fetch("http://localhost:6003/provider/login", settings);

            if (!responseLogin) {
                const message = `An error has occurred: ${responseLogin.message}`;
                window.alert(message);
                return;
            }

            const loginRes = await responseLogin.json();
            if (!loginRes) {
                window.alert(`Provider with id ${providerId} not found`);
                return;
            } else {
                console.log(loginRes.token);
                if (loginRes.token) {
                    localStorage.setItem("token", loginRes.token);
                    navigate("/provider/view-locations");
                } else {
                    // window.alert(`An error has occurred: ${loginRes.message}`);
                    const message = `An error has occurred: ${loginRes.message}`;
                    setErrorMessage(message);
                    setShowModal(true);
                }
            }
        }

        confirmLogin();
    };

    useEffect(() => {
        async function checkIsLoggedIn() {
            console.log("Checking If Logged In");
            const settings = {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            };

            const responseAuth = await fetch("http://localhost:6003/provider/authenticate", settings);

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
            } 
            
            if (authRes.isLoggedIn) {
                console.log("Fetch Data Triggered");
                const responseDetails = await fetch(`http://localhost:6003/provider/${authRes.id}`);
                
                if (!responseDetails) {
                    const message = `An error has occurred: ${responseDetails.message}`;
                    window.alert(message);
                    return;
                } 

                const detailsRes = await responseDetails.json();
                console.log(detailsRes);

                if (detailsRes._id === authRes.id) {
                    setAuthState(authRes);
                    navigate("/provider/view-locations");
                } 
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
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black-900">Provider Log In</h2>
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
                                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            ></input>
                            <label 
                                htmlFor="remember-me" 
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember Me
                            </label>
                        </div>

                        <div className="text-sm text-black-600">
                            <Link to="/signup/provider">Don't Have An Account?</Link>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="group relative flex w-full justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg 
                                    className="h-5 w-5 text-orange-500 group-hover:text-orange-400" 
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

            {/* Modal */}
            {showModal && (
                <div
                    id="my-modal"
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
                                Login Failed!
                            </h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    {errorMessage}
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={() => setShowModal(false)}
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

export default ProviderLogin;
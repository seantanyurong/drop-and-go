import React from "react";

const Login = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">
                    Options
                </h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                    <a
                        href="/login/user"
                        className="group"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-w-7 lg:aspect-h-8">
                            <img
                                src="https://img.freepik.com/premium-vector/male-female-traveller-standing-with-luggages-together_260807-60.jpg?w=2000"
                                alt="Male and Female traveller standing with luggage together."
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            ></img>
                        </div>
                        <h3 className="mt-4 text-center text-gray-700">
                            User Login
                        </h3>
                    </a>

                    <a
                        href="/login/provider"
                        className="group"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-w-7 lg:aspect-h-8">
                            <img
                                src="https://img.freepik.com/free-vector/shop-with-we-are-open-sign_23-2148557016.jpg?w=2000"
                                alt="Shop with open sign."
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            ></img>
                        </div>
                        <h3 className="mt-4 text-center text-gray-700">
                            Provider Login
                        </h3>
                    </a>

                    <a
                        href="/login/admin"
                        className="group"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-w-7 lg:aspect-h-8">
                            <img
                                src="https://img.freepik.com/free-vector/growth-analytics-concept-illustration_114360-2287.jpg?w=2000"
                                alt="Female with Analytics Dashboard."
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            ></img>
                        </div>
                        <h3 className="mt-4 text-center text-gray-700">
                            Administrator Login
                        </h3>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Login;
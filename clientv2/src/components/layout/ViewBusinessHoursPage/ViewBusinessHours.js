import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const ViewBusinessHours = () => {
    let [activeMenuItem, setActiveMenuItem] = useState(0);

    const navigate = useNavigate();
    function handleClick() {
        navigate("/provider/edit-business-hours");
    }

    return (
        <div>
            <div className="bg-primary-200">
                <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
                    <div className="flex-col sm:flex-row flex items-center justify-between relative">
                        <div className="shrink-0 mr-4">
                            <p className="text-text-main text-xl">All Business Hours</p>
                        </div>

                        {/* Navigation */}
                        <nav className="flex grow mt-4 sm:mt-0">
                            <ul className="flex grow justify-end flex-wrap items-center">
                                <li
                                    onClick={() => setActiveMenuItem(0)}
                                    className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 0
                                        ? "bg-text-main text-text-dark"
                                        : "text-text-main"
                                        } `}
                                >
                                    Active
                                </li>
                                <li
                                    onClick={() => setActiveMenuItem(1)}
                                    className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 1
                                        ? "bg-text-main text-text-dark"
                                        : "text-text-main"
                                        } `}
                                >
                                    Completed
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 ">
                <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
                    <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md hover:bg-box-hover">
                        <div className="flex items-center mb-1 justify-between">
                            <div className="flex space-x-3 items-center">
                                <h3 className="font-semibold">Orchard</h3>
                            </div>
                            <div className="cursor-pointer" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                </svg>

                            </div>
                        </div>
                        <div>
                            <h4 className="font-light text-md">Opening Hours</h4>
                        </div>
                        <div className="mt-4 flex space-x-3 auto">
                            <ul>
                                <li className="font-light text-md">
                                    Monday:
                                </li>
                                <li className="font-light text-md">
                                    Tuesday:
                                </li>
                                <li className="font-light text-md">
                                    Wednesday:
                                </li>
                                <li className="font-light text-md">
                                    Thursday:
                                </li>
                                <li className="font-light text-md">
                                    Friday:
                                </li>
                                <li className="font-light text-md">
                                    Saturday:
                                </li>
                                <li className="font-light text-md">
                                    Sunday:
                                </li>
                            </ul>
                            <ul>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
                    <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md hover:bg-box-hover">
                        <div className="flex items-center mb-1 justify-between">
                            <div className="flex space-x-3 items-center">
                                <h3 className="font-semibold">Orchard</h3>
                            </div>
                            <div className="cursor-pointer" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                </svg>

                            </div>
                        </div>
                        <div>
                            <h4 className="font-light text-md">Opening Hours</h4>
                        </div>
                        <div className="mt-4 flex space-x-3 auto">
                            <ul>
                                <li className="font-light text-md">
                                    Monday:
                                </li>
                                <li className="font-light text-md">
                                    Tuesday:
                                </li>
                                <li className="font-light text-md">
                                    Wednesday:
                                </li>
                                <li className="font-light text-md">
                                    Thursday:
                                </li>
                                <li className="font-light text-md">
                                    Friday:
                                </li>
                                <li className="font-light text-md">
                                    Saturday:
                                </li>
                                <li className="font-light text-md">
                                    Sunday:
                                </li>
                            </ul>
                            <ul>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                                <li className="font-light text-md">
                                    9am-6pm
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBusinessHours;

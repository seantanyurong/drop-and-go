const Footer = () => {
    return (
        <div className="mt-[-1px] text-gray-700 leading-6 text-sm bg-gray-100 py-2 px-3">
            <div className="flex justify-between flex-wrap w-full max-w-1280 my-0 mx-[20px]">
                <ul className="basis-[48%] my-[42px] p-0 list-none">
                    <li className="mb-[3px]">
                        <a className="text-gray-700 font-medium inline-block py-2">
                            Drop&Go!
                        </a>

                        <ul className="mx-0 mt-[12px] mb-0 p-0 list-none">
                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    Home
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/become-a-provider">
                                    Become a location provider
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/faq">
                                    FAQ Page
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/about-us">
                                    About us
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="underline font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/contact-us">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="basis-[48%] my-[42px] p-0 list-none">
                    <li className="mb-[3px]">
                        <a className="text-gray-700 font-medium inline-block py-2">
                            Drop&Go Location Providers
                        </a>

                        <ul className="mx-0 mt-[12px] mb-0 p-0 list-none">
                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    Singapore
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    Rome
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    Aarhus
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    London
                                </a>
                            </li>

                            <li className="mb-[3px]">
                                <a className="font-normal pointer-events-auto text-gray-700 inline-block py-[2px] px-0 transition-colors duration-150 hover:text-gray-900 focus:outline-none"
                                    href="/">
                                    Barcelona
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>



            </div>
        </div>
    );
}

export default Footer;
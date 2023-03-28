const ProviderHeader = () => {
    return (
        <div className="block py-[50px] relative border-b-1 border-solid border-border-main bg-gradient-to-b from-primary-100 to-primary-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="text-base leading-5 tracking-tighter">
                    <img className="absolute top-0 left-0 w-full h-full bg-ccesf8 opacity-100 object-cover z-0"
                        src="https://res.cloudinary.com/dpiued5io/image/upload/v1679986076/01Grocery5-jumbo_w74alz.jpg"></img>
                </div>
            </div>

            <div className="relative z-2 w-full max-w-screen-xl mx-auto px-6 lg:px-8">
                <div className="m-0 max-w-none text-center overflow-hidden">
                    <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter mt-4 mb-5">
                        Do you own a business?
                    </h1>

                    <h2 className="py-0 px-[10px] max-w-none text-white font-medium mx-auto mt-0 mb-[20px] text-center text-lg leading-5 tracking-wider">
                        Whether you own a hotel, shop or cafe, you can monetise on any unused space
                    </h2>

                    <a className="mx-0 my-[18px] min-w-[160px] h-[48px] leading-[48px] text-lg text-center font-medium bg-gray-100 text-gray-600 shadow-md rounded-md inline-block px-6 border-none transition duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                        href="/signup/provider">
                        Get started today
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProviderHeader
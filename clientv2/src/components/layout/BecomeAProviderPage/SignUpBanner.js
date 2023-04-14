const SignUpBanner = () => {
    return (
        <div className="py-[50px] relative bg-primary-200 border-b border-gray-300">
            <div className="relative z-2 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="m-0 max-w-none text-center overflow-hidden">

                    {/* Header Text */}
                    <h1
                        className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter mt-4 mb-5">
                        Unlock your new revenue stream
                    </h1>

                    {/* Body Text */}
                    <h2
                        className="py-0 px-[10px] max-w-none text-white font-medium mx-auto mt-0 mb-[20px] text-center text-lg leading-5 tracking-tight">
                        Whether you own a hotel, shop or cafe,
                        you can monetise on any unused space
                    </h2>

                    {/* Provider Sign Up Button */}
                    <a
                        className="mx-0 my-[18px] min-w-[160px] h-[48px] leading-[48px] text-lg text-center font-medium bg-gray-100 text-gray-600 shadow-md rounded-md inline-block px-6 border-none transition duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                        href="/signup/provider">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignUpBanner
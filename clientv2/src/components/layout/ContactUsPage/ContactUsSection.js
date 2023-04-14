const ContactUsSection = () => {
    return (
        <div className="py-[70px] bg-white border-b border-gray-200">
            <div className="max-w-1280 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">

                {/* Header Text */}
                <h2
                    className="mb-[35px] text-center text-2xl leading-snug tracking-tighter font-bold mt-0 text-gray-700">
                    Contact Us
                </h2>

                <div className="flex-wrap pr-0">

                    {/* Email Us Header Text */}
                    <h3
                        className="text-2xl font-normal tracking-tighter leading-6 text-gray-700 mb-5">
                        Email Us
                    </h3>

                    {/* Email Us Body Text */}
                    <p className="my-4">
                        If you have a booking with Drop&Go and need help, please reach us at

                        {/* Non-Breaking Space */}
                        &nbsp;

                        {/* Mail To Link */}
                        <a
                            className="text-primary-200"
                            href="mailto:contact@dropandgo.com">
                            contact@dropandgo.com
                        </a>

                        .
                    </p>

                    <p className="my-4">
                        A reply to a booking confirmation email will be sent directly to
                        our support team. Please expect a reply within 1-3 business days.
                    </p>

                    {/* FAQ Header Text */}
                    <h3
                        className="text-2xl font-normal tracking-tighter leading-6 text-gray-700 my-5">
                        Frequently Asked Questions
                    </h3>

                    {/* FAQ Body Text */}
                    <p className="my-4">
                        We have gathered the most frequently asked questions from our traveling customers and uploaded them and our answers on the following page –>

                        {/* Non-Breaking Space */}
                        &nbsp;

                        {/* Text Link to FAQ Page */}
                        <a
                            className="text-primary-200"
                            href="/faq">
                            FAQ
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQSection = () => {
    return (
        <div className="block py-[70px] bg-white border-b border-gray-200">
            <div className="max-w-1280 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">

                {/* FAQ Header Text */}
                <h2 className="mb-[35px] text-center text-2xl leading-6 tracking-tight font-bold text-gray-700">
                    FAQ
                </h2>

                {/* FAQ Accordion */}
                <Accordion
                    allowMultipleExpanded={false}
                >
                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                What is Drop&Go?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                Drop&Go is luggage storage in local shops making luggage
                                storage easier and more convenient than ever.
                            </p>
                            <br></br>
                            <p>
                                By using our online search engine, you are able to locate luggage
                                storage locations near you or in a specific area. Specify your
                                drop-off date and the number of bags you want to be stored.
                                Making a booking is risk-free and directions will be available to you.
                                Should your travel plans change, you can always cancel the booking.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Can I store luggage for several days?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                You can easily store your bags for several days. Start
                                the storage timer when dropping off your bags and stop
                                the storage timer upon collection.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                How do you store your luggage with Drop&Go?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                1. Use the map or browse the list of shops.
                                <br></br>
                                <br></br>
                                2. Amend the number of bags you wish to be
                                stored and the drop-off date.
                                <br></br>
                                <br></br>
                                3. Start the storage timer once you arrive
                                in the shop for insurance.
                                <br></br>
                                <br></br>
                                4. Stop the Storage Timer when you pick up your
                                bags. This will process payment.
                                <br></br>
                                <br></br>
                                Everything is done in a few simple steps for
                                your safety and convenience.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Is my luggage Insured and safe?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                In collaboration with First Marine Insurance Ltd.,
                                cover holders for Lloyd’s of London, one of the
                                world's largest insurance companies, we are proud
                                to be covering each piece of luggage every time you
                                use our luggage storage service. Our insurance cover
                                up to $3,000 per item of luggage. Make sure you
                                do not pay cash in a Drop&Go luggage storage shop,
                                because insurance will not cover any bookings that are
                                not paid for directly to Drop&Go. You must pay directly
                                to Drop&Go to be covered.
                                <br></br>
                                <br></br>
                                When you arrange for drop-off and pick-up of your luggage,
                                you will receive an automatic receipt via email. The shop
                                will ask to see a valid receipt before returning any luggage to you.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Is the shop being paid for being a location provider?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                Yes, our location providers receives a commission from all
                                the luggage they store. Because, of course, without
                                our partner shops none of this would be possible.
                                Drop&Go is using the principles of the sharing economy,
                                enabling local shops, hotels, hostel, cafes etc. to offer
                                luggage storage to travelers.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Where is the luggage stored?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                Luggage storage sites are located inside existing
                                businesses, including retail outlets, hotels, cafes,
                                and more. All are vetted by location providers' local
                                employee, who performs regular quality checks.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default FAQSection;
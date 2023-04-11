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
                <h2 className="mb-[35px] text-center text-2xl leading-6 tracking-tight font-bold text-gray-700">
                    FAQ
                </h2>

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
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading
                            className="font-medium"
                        >
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
}

export default FAQSection;
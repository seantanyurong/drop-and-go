import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ContactUsSection from "../components/layout/ContactUsPage/ContactUsSection";
import Header from "../components/layout/UserBookingPage/Header";
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const ContactUs = () => {
    return(
        <div>
            <Header />
            <ProviderHeader />
            <ContactUsSection />
            <Footer />
            <FooterBottom />
        </div>
    );
}

export default ContactUs;
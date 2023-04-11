import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ContactUsSection from "../components/layout/ContactUsPage/ContactUsSection";
import DefaultHeader from "../components/ui/DefaultHeader";
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const ContactUs = () => {
    return(
        <div>
            <DefaultHeader />
            <ProviderHeader />
            <ContactUsSection />
            <Footer />
            <FooterBottom />
        </div>
    );
}

export default ContactUs;
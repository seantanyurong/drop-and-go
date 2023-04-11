import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ContactUsSection from "../components/layout/ContactUsPage/ContactUsSection";
import DefaultHeader from "../components/ui/DefaultHeader";
import Footer from "../components/ui/Footer";

const ContactUs = () => {
    return(
        <div>
            <DefaultHeader />
            <ProviderHeader />
            <ContactUsSection />
            <Footer />
        </div>
    );
}

export default ContactUs;
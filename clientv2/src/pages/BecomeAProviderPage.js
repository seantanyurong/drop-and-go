import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ProviderHowItWorks from "../components/layout/BecomeAProviderPage/ProviderHowItWorks";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import Header from "../components/layout/UserBookingPage/Header";
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const BecomeAProviderPage = () => {
    return(
        <div>
            <Header />
            <ProviderHeader />
            <ProviderBenefits />
            <ProviderHowItWorks />
            <SignUpBanner />
            <Footer />
            <FooterBottom />
        </div>
    );
}

export default BecomeAProviderPage
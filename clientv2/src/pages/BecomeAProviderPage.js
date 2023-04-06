import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ProviderHowItWorks from "../components/layout/BecomeAProviderPage/ProviderHowItWorks";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import Header from "../components/layout/UserBookingPage/Header";
import Footer from "../components/ui/Footer";

const BecomeAProviderPage = () => {
    return(
        <div>
            <Header />
            <ProviderHeader />
            <ProviderBenefits />
            <ProviderHowItWorks />
            <SignUpBanner />
            <Footer />
        </div>
    );
}

export default BecomeAProviderPage
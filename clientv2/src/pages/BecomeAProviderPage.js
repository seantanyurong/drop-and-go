import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ProviderHowItWorks from "../components/layout/BecomeAProviderPage/ProviderHowItWorks";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import Header from "../components/layout/UserBookingPage/Header";

const BecomeAProviderPage = () => {
    return(
        <div>
            <Header />
            <ProviderHeader />
            <ProviderBenefits />
            <ProviderHowItWorks />
            <SignUpBanner />
        </div>
    );
}

export default BecomeAProviderPage
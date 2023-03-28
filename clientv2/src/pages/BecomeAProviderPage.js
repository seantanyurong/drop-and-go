import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import Header from "../components/layout/UserBookingPage/Header";

const BecomeAProviderPage = () => {
    return(
        <div>
            <Header />
            <ProviderHeader />
            <ProviderBenefits />
            <SignUpBanner />
        </div>
    );
}

export default BecomeAProviderPage
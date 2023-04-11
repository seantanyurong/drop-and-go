import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ProviderHowItWorks from "../components/layout/BecomeAProviderPage/ProviderHowItWorks";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import DefaultProviderHeader from '../components/ui/DefaultProviderHeader';
import Footer from "../components/ui/Footer";

const BecomeAProviderPage = () => {
    return (
        <div>
            <DefaultProviderHeader />
            <ProviderHeader />
            <ProviderBenefits />
            <ProviderHowItWorks />
            <SignUpBanner />
            <Footer />
        </div>
    );
}

export default BecomeAProviderPage
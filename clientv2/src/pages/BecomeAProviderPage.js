import ProviderBenefits from "../components/layout/BecomeAProviderPage/ProviderBenefits";
import ProviderHeader from "../components/layout/BecomeAProviderPage/ProviderHeader";
import ProviderHowItWorks from "../components/layout/BecomeAProviderPage/ProviderHowItWorks";
import SignUpBanner from "../components/layout/BecomeAProviderPage/SignUpBanner";
import DefaultHeader from '../components/ui/DefaultHeader';
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const BecomeAProviderPage = () => {
    return(
        <div>
            <DefaultHeader />
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
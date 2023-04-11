import FAQSection from "../components/layout/FAQPage/FAQSection";
import SearchBarSection from "../components/layout/HomePage/SearchBarSection";
import DefaultHeader from "../components/ui/DefaultHeader";
import Footer from "../components/ui/Footer";
import FooterBottom from "../components/ui/FooterBottom";

const FAQPage = () => {
    return (
        <div>
            <DefaultHeader />
            <SearchBarSection />
            <FAQSection />
            <Footer />
            <FooterBottom />
        </div>

    );
}

export default FAQPage;
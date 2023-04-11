import FAQSection from "../components/layout/FAQPage/FAQSection";
import SearchBarSection from "../components/layout/HomePage/SearchBarSection";
import DefaultHeader from "../components/ui/DefaultHeader";
import Footer from "../components/ui/Footer";

const FAQPage = () => {
    return (
        <div>
            <DefaultHeader />
            <SearchBarSection />
            <FAQSection />
            <Footer />
        </div>

    );
}

export default FAQPage;
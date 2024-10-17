import ContactUs from "./Components/ContactUs.jsx";
import AboutUs from "./Components/AboutUs";
import HeroSection from "./Components/HeroSection";
import HomeSection from "./Components/HomeSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6 ">
        <HeroSection />
        <HomeSection />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};
export default App;

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Testimonials from './components/Testimonials/Testimonials';
import BookingSection from './components/BookingSection/BookingSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <BookingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

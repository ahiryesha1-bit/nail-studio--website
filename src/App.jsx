import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import PriceList from "./components/PriceList";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Contact from "./components/contact";
import Booking from "./components/Booking";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
     <Gallery />
      <PriceList />
      <Testimonials />
      <Instagram />
      <FAQ />
      <Location />
      <Contact />
      <Booking />
      <Footer />
    </>
  );
}

export default App;

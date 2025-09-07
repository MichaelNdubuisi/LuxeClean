import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ServicesPreview from "./components/ServicesPreview";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <ServicesPreview />
                <Testimonials />
                <CallToAction />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* 👈 Contact Route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

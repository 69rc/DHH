import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/navbar/Navbar';
import Home from './componets/home/hero';
import Services from './componets/services/services';
import About from './componets/about/about';
import Features from './componets/features/features';
import Contact from './componets/contact/contact';
import Teem from './componets/teem/teem';
import Testimonial from './componets/Testimonial/Testimonial';
import Footer from './componets/footer/footer';
import ScrollToTop from './ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Teem />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

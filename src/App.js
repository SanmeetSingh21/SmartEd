import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Dashboard from './pages/Dashboard';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Courses from './pages/Courses';
import Uploader from './pages/Uploader';
import ContactUs from './pages/ContactUs';
import About from './components/About'

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("SmartEd");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<DemoProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/uploader" element={<Uploader />} /> 
            <Route path="/contactus" element={<ContactUs />} /> 
            <Route path="/about" element={<About />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;

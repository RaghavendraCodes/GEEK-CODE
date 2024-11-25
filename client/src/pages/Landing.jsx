import React from 'react'
import Navbar from '../components/Navbar';
import colors from '../libs/colors';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import AboutUS from '../components/AboutUS';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
    <div
      className="h-full flex flex-col scroll-smooth"
      style={{ backgroundColor: colors.deepSpaceGray }}
    >
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Feature Section */}
      <div className="w-full">
        <Feature />
      </div>

      {/* About Section */}
      <div className="w-full">
        <AboutUS/>
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <Footer/>
      </div>
    </div>
    </div>
  )
}

export default Landing
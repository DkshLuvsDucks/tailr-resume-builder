import React from 'react'
import Banner from '../components/home/Banner.jsx'
import Hero from '../components/home/Hero.jsx'
import Features from '../components/home/Features.jsx'
import Testimonial from '../components/home/Testimonial.jsx'
import CTA from '../components/home/CTA.jsx'
import Footer from '../components/home/Footer.jsx'
import ProductScroll from '@/components/home/ProductScroll.jsx'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <ProductScroll/>
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
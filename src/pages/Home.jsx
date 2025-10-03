import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FeatHighlights from '../components/FeatHighlight';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeatHighlights />
      <Pricing />
      <Testimonials />
    </div>
  )
}

export default Home

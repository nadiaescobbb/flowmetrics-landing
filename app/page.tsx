/**
 * Home Page
 * 
 * Architecture: Server component (all sections except FAQ are server-rendered)
 * SEO: Semantic HTML structure with proper heading hierarchy
 * Performance: Minimal client-side JavaScript (only FAQ accordion)
 * 
 * Rendering Strategy:
 * - Header: Server (no interactivity)
 * - Hero: Server (static content)
 * - SocialProof: Server (static)
 * - Features: Server (static grid)
 * - HowItWorks: Server (static)
 * - Pricing: Server (static cards)
 * - Testimonials: Server (static)
 * - FAQ: Client (interactive accordion)
 * - FinalCTA: Server (static)
 * - Footer: Server (static)
 */

import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
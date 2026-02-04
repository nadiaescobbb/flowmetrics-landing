/**
 * Header Component
 * 
 * Architecture: Server component (no interactivity needed for basic nav)
 * Why: Sticky header for persistent access to CTA
 * SEO: <header> semantic HTML, proper link structure
 * Performance: No JavaScript, pure CSS sticky positioning
 */

import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">FlowMetrics</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden sm:inline-flex text-gray-600 hover:text-gray-900 text-sm font-medium">
              Sign in
            </a>
            <Button size="sm" href="#pricing">
              Get Started
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
/**
 * Hero Component
 * 
 * Architecture: Server component
 * SEO: Single H1 on page, outcome-focused headline
 * Design: Large spacing, clear hierarchy, strong CTAs
 * Performance: No JavaScript, optimized for LCP (Largest Contentful Paint)
 */

import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by 2,000+ growing businesses</span>
          </div>

          {/* Main Headline - Single H1 for SEO */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
            Analytics that drive real business growth
          </h1>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get the insights you need without the complexity. FlowMetrics delivers real-time analytics designed for teams that move fast.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" href="#pricing">
              Start Free Trial
            </Button>
            <Button size="lg" variant="secondary" href="#demo">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-sm text-gray-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  )
}
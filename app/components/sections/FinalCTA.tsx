/**
 * Final CTA Component
 * 
 * Architecture: Server component
 * Why: Last chance to convert visitors before footer
 * Design: High contrast, clear action
 * Performance: No JavaScript overhead
 */

import Container from '../ui/Container'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg--to-br from-primary-600 to-primary-700">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your analytics?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Join thousands of teams already making better decisions with FlowMetrics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-50"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              className="bg-primary-800 text-white hover:bg-primary-900"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-primary-100 mt-8 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  )
}
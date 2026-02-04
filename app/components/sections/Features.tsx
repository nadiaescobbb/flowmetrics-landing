/**
 * Features Component
 *
 * Architecture: Server component with Card primitives
 * Why: Grid layout scales across breakpoints
 * SEO: Semantic <section> with descriptive content
 * Performance: No JavaScript, pure CSS grid
 */

import Container from '../ui/Container'
import Card from '../ui/Card'

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Real-Time Insights',
      description:
        'Monitor your key metrics as they happen. No delays, no waiting for reports to refresh.',
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Custom Dashboards',
      description:
        'Build dashboards that match your workflow. Drag, drop, and configure exactly what you need.',
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Enterprise Security',
      description:
        'Bank-level encryption and compliance. Your data stays secure with SOC 2 Type II certification.',
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Seamless Integrations',
      description:
        'Connect with the tools you already use. One-click integrations with 100+ platforms.',
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to grow with confidence
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features that help you make better decisions, faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} hover>
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
     
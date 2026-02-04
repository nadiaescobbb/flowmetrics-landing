/**
 * How It Works Component
 * 
 * Architecture: Server component
 * Why: Reduces friction by showing simplicity of onboarding
 * Design: Horizontal flow on desktop, stacked on mobile
 * Performance: No JavaScript, responsive with Tailwind
 */

import Container from '../ui/Container'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect your data',
      description: 'Link your existing tools in minutes. No complex setup or technical expertise required.'
    },
    {
      number: '02',
      title: 'Configure your dashboard',
      description: 'Choose from pre-built templates or create custom views that match your needs.'
    },
    {
      number: '03',
      title: 'Get actionable insights',
      description: 'Start making data-driven decisions immediately with real-time analytics at your fingertips.'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get started in minutes, not months
          </h2>
          <p className="text-xl text-gray-600">
            Simple setup that gets you from zero to insights faster than you can brew coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-primary-200 to-transparent -translate-x-6" />
              )}
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
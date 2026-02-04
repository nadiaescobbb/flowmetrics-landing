/**
 * Pricing Component
 * 
 * Architecture: Server component with Card primitives
 * Why: Clear pricing builds trust, reduces sales friction
 * Design: Middle tier highlighted to guide decision-making
 * Performance: Static content, no client-side JavaScript
 */

import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small teams just getting started',
      features: [
        'Up to 10,000 events/month',
        '3 team members',
        'Basic dashboards',
        'Email support',
        '7-day data retention'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      price: '99',
      description: 'For growing teams that need more power',
      features: [
        'Up to 100,000 events/month',
        'Unlimited team members',
        'Custom dashboards',
        'Priority support',
        '90-day data retention',
        'Advanced analytics',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Scale',
      price: '299',
      description: 'For large teams with complex needs',
      features: [
        'Unlimited events',
        'Unlimited team members',
        'White-label dashboards',
        'Dedicated support',
        'Unlimited data retention',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, scale as you grow. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-primary-600 shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </Container>
    </section>
  )
}
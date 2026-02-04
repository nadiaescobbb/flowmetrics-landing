/**
 * FAQ Component
 * 
 * Architecture: CLIENT COMPONENT (requires interactivity)
 * Why: Accordion needs onClick handlers and state management
 * SEO: Content still crawlable, just interactive
 * Performance: Only this component uses JavaScript - rest of page is static
 */

'use client'

import { useState } from 'react'
import Container from '../ui/Container'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does it take to set up?',
      answer: 'Most teams are up and running in under 10 minutes. Our onboarding wizard guides you through connecting your data sources and creating your first dashboard.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, absolutely. You can cancel your subscription at any time with no questions asked. Your data will remain accessible for 30 days after cancellation.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All plans include a 14-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We support over 100 integrations including Stripe, Shopify, Google Analytics, Salesforce, HubSpot, and many more. We also offer a REST API for custom integrations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We use bank-level encryption, are SOC 2 Type II certified, and comply with GDPR and CCPA regulations. Your data is stored in secure data centers with automatic backups.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will take effect at the start of your next billing cycle.'
    }
  ]

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about FlowMetrics.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact our support team →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
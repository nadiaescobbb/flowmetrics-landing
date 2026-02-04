/**
 * Testimonials Component
 * 
 * Architecture: Server component
 * Why: Social proof increases conversion
 * Design: Cards with quotes, attribution, and role
 * Performance: No JavaScript needed
 */

import Container from '../ui/Container'
import Card from '../ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "FlowMetrics transformed how we make decisions. We went from guessing to knowing exactly what drives our business forward.",
      author: "Sarah Chen",
      role: "Head of Growth",
      company: "TechFlow"
    },
    {
      quote: "The setup took less than 10 minutes. Within an hour, we had insights that would have taken our old tool days to generate.",
      author: "Michael Rodriguez",
      role: "VP of Product",
      company: "DataSync"
    },
    {
      quote: "Finally, an analytics tool that doesn't require a data science degree. Our entire team can now make data-driven decisions.",
      author: "Emily Thompson",
      role: "CEO",
      company: "CloudBase"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about FlowMetrics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg mb-6 grow leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
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
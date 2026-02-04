
import Container from '../ui/Container'

export default function SocialProof() {
  const companies = [
    'Acme Corp',
    'TechFlow',
    'DataSync',
    'CloudBase',
    'MetricLab',
    'FastTrack'
  ]

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50">
      <Container>
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
          Trusted by innovative companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div 
              key={company}
              className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
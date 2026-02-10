import Card from "../ui/Card";
import Container from "../ui/Container";

const testimonials = [
  { name: "Ana R.", role: "Data Analyst", text: "FlowMetrics changed the way we work." },
  { name: "Luis P.", role: "CTO", text: "Real-time analytics made simple." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <Container className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <p className="text-gray-600 dark:text-gray-300">{t.text}</p>
            <h4 className="font-bold mt-4">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </Card>
        ))}
      </Container>
    </section>
  );
}

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function FinalCTA() {
  return (
    <section className="py-12">
      <Container className="brand-gradient rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          🚀
        </div>
        <h2 className="text-4xl lg:text-5xl font-black mb-8">Ready to transform your data infrastructure?</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">Join 1,000+ data teams building modern real-time pipelines with FlowMetrics.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="bg-white text-primary px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-transform">
            Start Your Free Trial
          </Button>
          <Button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/20 transition-colors">
            Talk to Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}

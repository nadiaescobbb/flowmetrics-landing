import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-white dark:bg-background-dark">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in v2.0
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#121117] dark:text-white">
            Master Your <span className="text-primary">Data Flow</span> in Real-Time
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[500px] leading-relaxed">
            Optimize your data pipelines with high-fidelity real-time analytics designed for modern data teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end">
              Start Free Trial
            </Button>
            <Button className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200">
              View Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div
              className="w-full aspect-video bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDleNGD2Glo305eQzI2t8748GsmYRlTFs7lPqWImMvg7swjvX6z4cLZjUb8iKhge41lQQ9PrV6iaSB4dV-oC9mj_Fu3inl6IKzDlX6BPOy7G4MPTyz7V8gL_hN-3ndXnEO9NFXp3b_e4Di_lNVmwk5adsuM7gtdD1dJ6u8CHQMNZH0g04bLkMVn_0WDuTY5mlkg1u4pphRq70sIpYHIMv-8EYqqHfO5WHHWDKYdV6zYP9FOavrVZi5MEcveNW8CdjcSmnCUwo0ot2S_")`,
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

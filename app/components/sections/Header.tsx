import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f1f0f4] dark:border-gray-800">
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end rounded-lg text-white">
            <span className="material-symbols-outlined !text-xl">insights</span>
          </div>
          <h2 className="text-[#121117] dark:text-white text-xl font-black tracking-tight">
            FlowMetrics
          </h2>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
            Product
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
            Solutions
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
            Pricing
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
            Docs
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button className="bg-transparent text-black dark:text-white hover:text-primary px-4 py-2">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
}

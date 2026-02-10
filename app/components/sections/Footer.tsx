import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-lg font-black text-[#121117] dark:text-white">FlowMetrics</h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              The high-fidelity real-time analytics platform for modern data teams. Scale faster, move smarter.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>Streaming Engine</li>
              <li>Connectors</li>
              <li>Cloud Platform</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Community</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-800 gap-4">
          <p className="text-sm text-gray-400">© 2024 FlowMetrics Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

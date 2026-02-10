const plans = [
  {
    title: "Starter",
    price: "$0",
    features: ["1M Events / month", "3 Sources", "Community Support"],
    badge: null,
    primary: false,
  },
  {
    title: "Pro",
    price: "$99",
    features: ["50M Events / month", "Unlimited Sources", "Priority Email Support", "Advanced SQL Transforms"],
    badge: "Most Popular",
    primary: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited Volume", "Dedicated Manager", "SSO & Security Packs"],
    badge: null,
    primary: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tight mb-4">Pricing Plans</h2>
        <p className="text-gray-600 dark:text-gray-400">Scale from startup to enterprise with flexible billing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div
            key={p.title}
            className={`p-10 rounded-3xl border ${p.primary ? "border-2 border-primary shadow-2xl scale-105 bg-white dark:bg-gray-900 relative" : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"} flex flex-col`}
          >
            {p.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 brand-gradient text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {p.badge}
              </div>
            )}
            <h3 className={`${p.primary ? "text-primary" : "text-gray-500"} text-lg font-bold mb-2`}>{p.title}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black">{p.price}</span>
              {!p.price.includes("$") && <span className="text-gray-400">/mo</span>}
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${p.primary ? "text-primary" : "text-green-500"}`}>
                    check_circle
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-4 rounded-xl font-bold ${p.primary ? "brand-gradient text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" : "border-2 border-primary text-primary hover:bg-primary/5 transition-colors"}`}
            >
              {p.primary ? "Get Pro Now" : p.title === "Enterprise" ? "Contact Sales" : "Start for Free"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

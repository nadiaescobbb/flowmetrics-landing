const features = [
  {
    icon: "timeline",
    title: "Live Stream Processing",
    desc: "Process millions of events per second with sub-millisecond latency using our proprietary engine.",
  },
  {
    icon: "auto_fix_high",
    title: "Automated Schema Discovery",
    desc: "Automatically detect and adapt to schema changes across your sources without breaking pipelines.",
  },
  {
    icon: "speed",
    title: "Latency Monitoring",
    desc: "Real-time visibility into every stage of your data pipeline's performance with deep-trace analysis.",
  },
];

export default function Features() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tight mb-4">Powerful Features for Data Engineering</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Everything you need to manage complex data streams at scale.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">{f.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

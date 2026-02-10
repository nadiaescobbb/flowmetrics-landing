const steps = [
  { title: "Connect", desc: "Integrate with 150+ sources including Kafka, S3, and Postgres with one click." },
  { title: "Process", desc: "Apply SQL transforms, filtering, and aggregations directly on the stream." },
  { title: "Visualize", desc: "Deliver clean data to Snowflake, BigQuery, or your favorite BI tools." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-primary/5 dark:bg-primary/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">Pipeline Workflow</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Transform raw noise into actionable insights in three simple steps.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-primary/20 -translate-y-1/2 -z-10"></div>

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center gap-6 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg w-full max-w-sm"
            >
              <div className="w-16 h-16 rounded-full brand-gradient text-white flex items-center justify-center text-2xl font-black">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

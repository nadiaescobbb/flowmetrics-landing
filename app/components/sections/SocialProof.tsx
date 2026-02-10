export default function SocialProof() {
  const companies = [
    { name: "TechFlow", icon: "api" },
    { name: "CloudScale", icon: "cloud" },
    { name: "Velocity", icon: "bolt" },
    { name: "SecureData", icon: "shield" },
    { name: "QueryX", icon: "database" },
  ];

  return (
    <section className="py-12 bg-background-light dark:bg-background-dark/50 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by leading data teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          {companies.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-xl font-bold">
              <span className="material-symbols-outlined">{c.icon}</span> {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

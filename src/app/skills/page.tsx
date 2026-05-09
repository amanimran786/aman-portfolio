import ScrollReveal from '@/components/ScrollReveal';

export default function Skills() {
  const skillCategories = [
    {
      category: "AI Safety Operations",
      icon: "🔒",
      skills: ["AI misuse", "Jailbreak review", "Prompt injection", "Policy evasion", "Classifier tradeoffs", "Precision/recall", "Incident analysis", "Calibration"],
    },
    {
      category: "Trust & Safety",
      icon: "🤖",
      skills: ["Fraud", "Account abuse", "Coordinated behavior", "Policy interpretation", "Enforcement gaps", "Root cause analysis", "Risk triage"],
    },
    {
      category: "SQL & Analytics",
      icon: "📊",
      skills: ["CTEs", "Window functions", "Cohort analysis", "Anomaly detection", "Query optimization", "Measurement design", "Signal QA"],
    },
    {
      category: "Python Workflows",
      icon: "🐍",
      skills: ["Automation", "Data enrichment", "Signal pipelines", "Model evaluation", "scikit-learn", "Pandas", "Threat analysis"],
    },
    {
      category: "Software Engineering",
      icon: "🛠️",
      skills: ["TypeScript", "Next.js", "React", "Swift", "Java", "FastAPI", "Git", "Tailwind"],
    },
    {
      category: "Local-First AI",
      icon: "⚙️",
      skills: ["macOS automation", "Private workflows", "Tool orchestration", "Context handling", "Operator control", "No cloud fallback"],
    },
    {
      category: "Detection Projects",
      icon: "🛡️",
      skills: ["Malware signals", "Phishing cues", "Abuse patterns", "Feature engineering", "Risk scoring", "User warnings"],
    },
    {
      category: "Execution",
      icon: "🎓",
      skills: ["High ownership", "Cross-functional work", "Clear escalation", "Decision logs", "Operational rigor", "Systems thinking"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="h-[3px] w-24 arctic-gradient rounded-full mb-6" />
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Skills & Expertise
          </h1>
          <p className="text-lg text-slate-400">
            Safety operations depth backed by SQL, Python, and product-minded engineering
          </p>
        </ScrollReveal>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="glass-card p-6 h-full">
                <div className="text-3xl mb-3 animate-gentle-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {category.icon}
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-4">
                  {category.category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-[length:200%_100%] animate-[gradient-flow_6s_ease_infinite]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Detection-minded. Operator-tested.
            </h2>
            <p className="text-lg text-sky-100 mb-8">
              I build the tools I wish safety teams had during live investigations.
            </p>
            <a
              href="mailto:aman.imran@sjsu.edu"
              className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-xl hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

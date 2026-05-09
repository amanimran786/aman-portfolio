import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="h-[3px] w-24 arctic-gradient rounded-full mb-6" />
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            AI safety operations, detection systems, and local-first automation
          </p>
        </ScrollReveal>

        {/* Main Story */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card p-8 mt-8 mb-8">
            <p className="text-lg text-slate-700 mb-6">
              I&apos;m <span className="text-sky-600 font-bold">Aman Imran</span>, an AI Safety operator with a software engineering background and 5+ years across Trust & Safety environments.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">
              My work sits where abuse patterns, policy boundaries, and data systems meet. I&apos;ve investigated fraud, coordinated behavior, account abuse, AI misuse, jailbreaks, prompt injection, and model manipulation, then translated those findings into cleaner signals and better operating workflows.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">
              I&apos;m SQL-heavy and Python-capable: CTEs, window functions, anomaly review, cohort analysis, enrichment scripts, and triage workflows. The way I like to work is simple: signal first, root cause second, system fix third.
            </p>

            <p className="text-slate-600 leading-relaxed">
              I&apos;m also building <span className="text-sky-600 font-bold">Jarvis AI</span>, a local-first macOS assistant for private desktop automation. That project is the engineering center of gravity here: practical AI, operator control, and no default cloud fallback.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ScrollReveal delay={0.1} direction="left">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-bold text-sky-600 mb-4">🧭 Operator Focus</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>AI misuse, jailbreaks, prompt injection, and policy evasion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Fraud, coordinated behavior, and account abuse investigations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Signal quality, calibration, and false-negative reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Policy, product, engineering, and operations collaboration</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-bold text-sky-600 mb-4">⚙️ Builder Focus</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Jarvis AI local-first macOS assistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>SQL/Python workflows for triage and signal review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>ML threat detection and phishing detection projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>B.S. Software Engineering from San Jos&eacute; State University</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Leadership */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-sky-600 mb-6">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Signal before certainty</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Metrics are clues, not conclusions. I normalize the data, look for distribution shifts, and separate labeling issues from true behavior changes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Systems over symptoms</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  One bad actor is an incident. A repeatable abuse pattern is a system gap, and the durable fix usually lives in tooling, policy, or feedback loops.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-[length:200%_100%] animate-[gradient-flow_6s_ease_infinite]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Interested in working together?
            </h2>
            <a
              href="mailto:aman.imran@sjsu.edu"
              className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

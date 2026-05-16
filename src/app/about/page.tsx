import ScrollReveal from '@/components/ScrollReveal';
import { CONTACT_EMAIL, RESUME_URL } from '@/lib/links';

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
            Security, Trust & Safety, AI risk, and detection systems
          </p>
        </ScrollReveal>

        {/* Main Story */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card p-8 mt-8 mb-8">
            <p className="text-lg text-slate-700 mb-6">
              I&apos;m <span className="text-sky-600 font-bold">Aman Imran</span>, a Security, Trust & Safety, and AI-focused professional with 7+ years across large-scale platform environments including YouTube, Meta, Google, TikTok, and Anthropic &mdash; experience I built while earning my B.S. in Software Engineering at San Jos&eacute; State University.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">
              My work sits where high-risk investigations, incident response, policy enforcement, and data systems meet. I&apos;ve led investigations into fraud, account abuse, coordinated behavior, jailbreaks, prompt injection, and adversarial misuse, then translated those findings into stronger detection strategies and operational playbooks.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">
              I use SQL and Python to turn ambiguous risk signals into measurable workflows: anomaly detection, telemetry review, triage automation, enrichment pipelines, signal QA, and precision/recall improvements.
            </p>

            <p className="text-slate-600 leading-relaxed">
              I also bring security operations experience from GSOC environments: threat monitoring, SIEM-style alerting, access control systems, incident command, audit logging, post-incident review, and cross-functional response with Engineering, Policy, Security, and Product.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ScrollReveal delay={0.1} direction="left">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-bold text-sky-600 mb-4">🧭 Risk & Investigation Focus</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>End-to-end incident response: detection, triage, containment, remediation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>AI misuse, jailbreaks, prompt injection, fraud, and account abuse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>False-positive/false-negative analysis and enforcement quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Escalation management across Policy, Product, Engineering, and Security</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-bold text-sky-600 mb-4">⚙️ Data & Systems Focus</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>SQL pipelines processing high-volume events and enforcement signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Python automation for triage, enrichment, anomaly detection, and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">▸</span>
                  <span>Monitoring, alerting, audit logging, dashboards, and operational visibility</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Education */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-bold text-sky-600 mb-2">🎓 Education</h3>
            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">B.S. Software Engineering</span> — San Jos&eacute; State University
              <span className="text-slate-400"> · Dec 2025</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Leadership */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-sky-600 mb-6">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Signal before certainty</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Metrics are clues, not conclusions. I validate telemetry, look for distribution shifts, and separate labeling issues from true behavior changes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Incident to system fix</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  I move from detection and triage to root cause, remediation, post-incident review, and detection coverage improvements.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Operational ownership</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  I build SOPs, dashboards, escalation paths, and workflows that help teams make consistent decisions in high-risk environments.
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
              Relevant for security, T&S, AI safety, and risk roles.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Resume
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block bg-white/15 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-xl border-2 border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

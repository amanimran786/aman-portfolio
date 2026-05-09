import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import { getPortfolioData } from '@/lib/github';
import { GITHUB_PROFILE_URL } from '@/lib/links';

export default async function Home() {
  const { profile, featuredProjects, isFallback, fallbackReason } = await getPortfolioData();
  const heroLine =
    'AI Safety operator building detection workflows, SQL/Python signal analysis, and Jarvis AI: a local-first macOS assistant for private operator automation.';
  const homeFeatured = featuredProjects.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="text-center">
          {/* Badge */}
          <ScrollReveal delay={0.1}>
            <div className="mb-6 inline-block">
              <span className="inline-block bg-sky-50 text-sky-600 px-5 py-2 rounded-full text-sm font-bold border border-sky-200 arctic-pulse">
                AI Safety Operator + Builder
              </span>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {profile.name || 'Aman Imran'}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-sky-600 font-semibold mb-4">
              Trust & Safety &middot; Detection Systems &middot; SQL/Python &middot; Local-First AI
            </p>
          </ScrollReveal>

          {/* Bio line */}
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              {heroLine}
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/projects" variant="primary">
                View Projects
              </AnimatedButton>
              <AnimatedButton href="/about" variant="secondary">
                About Me
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white/60 backdrop-blur-sm py-20 border-y border-sky-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 text-center tracking-tight">
              Featured Projects
            </h2>
            <p className="text-center text-slate-400 mb-12 text-sm">
              Live repository data synced from GitHub
            </p>
          </ScrollReveal>

          {isFallback && (
            <ScrollReveal>
              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                {fallbackReason || 'Displaying last successful GitHub snapshot.'}
              </div>
            </ScrollReveal>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeFeatured.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl animate-gentle-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                      {project.icon}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {project.repoName}
                    </h3>
                  </div>
                  <p className="text-slate-500 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      View Source &rarr;
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {homeFeatured.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-400">
              No featured repositories available right now. Check back soon.
            </div>
          )}

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105"
              >
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">
            Core Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Safety Ops',
              icon: '🛡️',
              skills: ['Abuse patterns', 'Policy gaps', 'AI misuse', 'Incident analysis', 'Calibration'],
            },
            {
              title: 'Signal Workflows',
              icon: '📊',
              skills: ['SQL CTEs', 'Anomaly detection', 'Cohorts', 'Python automation', 'Triage'],
            },
            {
              title: 'Engineering',
              icon: '⚙️',
              skills: ['Next.js', 'TypeScript', 'macOS apps', 'Local-first AI', 'Git'],
            },
          ].map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="glass-card p-6 text-center h-full">
                <div className="text-4xl mb-4 animate-gentle-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-[length:200%_100%] animate-[gradient-flow_6s_ease_infinite]" />
        <div className="absolute inset-0 shimmer-arctic opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-lg text-sky-100 mb-8">
              Open to safety engineering, AI evaluation, and detection-focused product work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aman.imran@sjsu.edu"
                className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/15 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-xl border-2 border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

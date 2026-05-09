import { getPortfolioData } from '@/lib/github';
import ScrollReveal from '@/components/ScrollReveal';

function formatUpdatedDate(updatedAt: string): string {
  return new Date(updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default async function Projects() {
  const { featuredProjects, otherProjects, isFallback, fallbackReason } = await getPortfolioData();

  return (
    <div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="h-[3px] w-24 arctic-gradient rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              My Projects
            </h1>
            <p className="text-lg text-slate-400">
              Safety, automation, and data projects pulled from live GitHub repositories
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {isFallback && (
          <ScrollReveal>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
              {fallbackReason || 'Displaying last successful GitHub snapshot.'}
            </div>
          </ScrollReveal>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 text-center tracking-tight">
              Featured Projects
            </h2>
            <p className="text-center text-slate-400 text-sm">
              Core builds across AI automation, detection, and operational tooling
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1}>
              <article className="glass-card overflow-hidden h-full">
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="relative z-10 text-center px-4">
                    <span className="text-6xl block mb-3 drop-shadow-lg animate-gentle-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                      {project.icon}
                    </span>
                    <p className="text-white/90 text-sm font-bold tracking-wider uppercase">
                      {project.repoName}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-5 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-400">
                    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
                      ⭐ {project.stars}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
                      🍴 {project.forks}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
                      Updated {formatUpdatedDate(project.updatedAt)}
                    </span>
                  </div>

                  <div className="flex gap-3 flex-wrap pt-4 border-t border-slate-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-bold text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                    >
                      GitHub
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 text-center text-sm font-bold text-white transition-all hover:shadow-md hover:shadow-sky-500/20"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {featuredProjects.length === 0 && (
          <div className="mb-16 rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-400">
            Featured repositories are not available right now.
          </div>
        )}

        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 text-center tracking-tight">
            Other Notable Projects
          </h2>
          <p className="text-center text-slate-400 text-sm mb-12">
            Additional builds, experiments, and technical implementations
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.08}>
              <article className="glass-card overflow-hidden h-full">
                <div className={`relative h-28 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <span className="text-4xl relative z-10 drop-shadow-lg">{project.icon}</span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5 text-xs font-semibold text-slate-400">
                    <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1">
                      ⭐ {project.stars}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1">
                      🍴 {project.forks}
                    </span>
                  </div>

                  <div className="flex gap-2 flex-wrap pt-4 border-t border-slate-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm font-bold text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                    >
                      GitHub
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-3 py-2 text-center text-sm font-bold text-white transition-all hover:shadow-md hover:shadow-sky-500/20"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {otherProjects.length === 0 && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-400">
            Additional repositories are not available right now.
          </div>
        )}
      </section>

      <section className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-[length:200%_100%] animate-[gradient-flow_6s_ease_infinite]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-lg text-sky-100 mb-8">
              Let&apos;s build systems that make detection work faster and sharper
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

import { getPortfolioData } from '@/lib/github';

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
    <div className="cyber-grid">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-slate-900 to-slate-950/50"></div>
        
        {/* Floating Particles/Nodes */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-floating-particle"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-red-400 rounded-full animate-floating-particle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-floating-particle" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-lg">
              My Projects
            </h1>
            <p className="text-lg text-slate-300 font-mono">
              Live repository intelligence synced from GitHub
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          {isFallback && (
            <div className="rounded-lg border border-red-500/40 bg-red-950/30 p-4 text-sm font-mono text-red-200">
              {'>> FALLBACK_MODE: '}
              {fallbackReason || 'Displaying last successful GitHub snapshot.'}
            </div>
          )}
        </section>

        {/* Featured Projects */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg animate-cyber-glow">
            🔥 Featured Security &amp; AI Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition-all neon-border border border-red-500/30 transform hover:scale-105 animate-hologram-flicker"
                style={{animationDelay: `${idx * 0.2}s`}}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden hover:animate-neo-pulse`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  ></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan-line"></div>
                  </div>
                  <div className="relative z-10 text-center px-4">
                    <span className="text-6xl block mb-2 drop-shadow-lg">{project.icon}</span>
                    <p className="text-white/90 text-sm font-mono font-bold tracking-wider uppercase">
                      {project.repoName}
                    </p>
                  </div>
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 text-glow">
                    {project.icon} {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 font-mono text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded-full text-sm font-mono hover:bg-red-900/50 hover:text-red-200 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-slate-700/70 text-slate-100 px-3 py-1 rounded-full text-xs font-mono">
                      ⭐ {project.stars}
                    </span>
                    <span className="bg-slate-700/70 text-slate-100 px-3 py-1 rounded-full text-xs font-mono">
                      🍴 {project.forks}
                    </span>
                    <span className="bg-slate-700/70 text-slate-100 px-3 py-1 rounded-full text-xs font-mono">
                      Updated {formatUpdatedDate(project.updatedAt)}
                    </span>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors hover:animate-cyber-glow"
                    >
                      {'>> GitHub'}
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors hover:animate-cyber-glow"
                      >
                        {'>> Live Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {featuredProjects.length === 0 && (
            <div className="mb-16 rounded-lg border border-red-500/30 bg-slate-800/40 p-6 text-center font-mono text-slate-300">
              {'>> Featured repositories are not available right now.'}
            </div>
          )}

          {/* Other Projects */}
          <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg animate-cyber-glow">
            ⚡ Other Notable Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all transform hover:scale-105 animate-hologram-flicker"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="h-24 bg-gradient-to-br from-slate-700 to-slate-800 relative flex items-center justify-center overflow-hidden hover:animate-neo-pulse">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)',
                      backgroundSize: '15px 15px',
                    }}
                  ></div>
                  <span className="text-4xl relative z-10 drop-shadow-lg">{project.icon}</span>
                  <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-red-500/40"></div>
                  <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-red-500/40"></div>
                  <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-red-500/40"></div>
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-red-500/40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-2 text-glow">
                    {project.icon} {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-900/30 border border-red-500/50 text-red-300 px-2 py-1 rounded text-xs font-mono hover:bg-red-900/50 hover:text-red-200 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-slate-700/70 text-slate-100 px-2 py-1 rounded text-xs font-mono">
                      ⭐ {project.stars}
                    </span>
                    <span className="bg-slate-700/70 text-slate-100 px-2 py-1 rounded text-xs font-mono">
                      🍴 {project.forks}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-mono font-semibold text-sm transition-colors hover:animate-cyber-glow"
                    >
                      {'>> GitHub'}
                    </a>
                    {project.homepageUrl && (
                      <a
                        href={project.homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold text-sm transition-colors hover:animate-cyber-glow"
                      >
                        {'>> Live Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {otherProjects.length === 0 && (
            <div className="mt-6 rounded-lg border border-red-500/30 bg-slate-800/40 p-6 text-center font-mono text-slate-300">
              {'>> Additional repositories are not available right now.'}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-950/80 to-red-900/80 backdrop-blur-sm text-white py-16 border-t border-red-500/30 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold text-glow-lg font-mono mb-4">
              {'< INTERESTED_IN_COLLABORATION />'}
            </h2>
            <p className="text-lg text-red-100 mb-8 font-mono">
              Let&apos;s build secure, innovative solutions together
            </p>
            <a
              href="mailto:aman.imran@sjsu.edu"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 font-mono neon-border-glow"
            >
              {'>> SEND_MESSAGE'}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

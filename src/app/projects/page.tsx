import { getPortfolioData } from '@/lib/github';
import PremiumProjectCard from '@/components/PremiumProjectCard';

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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 text-center text-glow-lg animate-cyber-glow">
              🔥 Featured Projects
            </h2>
            <p className="text-center text-white/50 font-mono text-sm">
              Enterprise-grade solutions showcasing advanced engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, idx) => (
              <PremiumProjectCard
                key={project.id}
                project={project}
                variant="featured"
                delay={idx * 100}
              />
            ))}
          </div>

          {featuredProjects.length === 0 && (
            <div className="mb-16 rounded-lg border border-red-500/30 bg-slate-800/40 p-6 text-center font-mono text-slate-300">
              {'>> Featured repositories are not available right now.'}
            </div>
          )}

          {/* Other Projects */}
          <h2 className="text-3xl font-bold text-white mb-2 text-center text-glow-lg animate-cyber-glow">
            ⚡ Other Notable Projects
          </h2>
          <p className="text-center text-white/50 font-mono text-sm mb-12">
            Additional innovative solutions and technical implementations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <PremiumProjectCard
                key={project.id}
                project={project}
                variant="standard"
                delay={idx * 80}
              />
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

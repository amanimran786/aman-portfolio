import type { PortfolioProject } from '@/types/github';

interface PremiumProjectCardProps {
  project: PortfolioProject;
  variant?: 'featured' | 'standard';
  delay?: number;
}

export default function PremiumProjectCard({
  project,
  variant = 'standard',
  delay = 0,
}: PremiumProjectCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
        isFeatured ? 'md:col-span-1' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Premium card wrapper with glassmorphism */}
      <div
        className={`relative backdrop-blur-xl h-full ${
          isFeatured
            ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-white/10'
            : 'bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/5'
        } rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300`}
      >
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Premium header section */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? 'h-64' : 'h-40'
          } bg-gradient-to-br ${project.color} group-hover:shadow-2xl transition-all duration-500`}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          {/* Scan line animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan-line group-hover:via-white/20"></div>
          </div>

          {/* Corner brackets for premium tech aesthetic */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40 group-hover:border-white/70 transition-colors"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/40 group-hover:border-white/70 transition-colors"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/40 group-hover:border-white/70 transition-colors"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40 group-hover:border-white/70 transition-colors"></div>

          {/* Content overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <div className="text-center">
              <span
                className={`block transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg ${
                  isFeatured ? 'text-7xl mb-4' : 'text-5xl mb-2'
                }`}
              >
                {project.icon}
              </span>
              <h3
                className={`font-black tracking-wider text-white drop-shadow-lg transition-all duration-300 ${
                  isFeatured ? 'text-2xl' : 'text-lg'
                }`}
              >
                {project.metadata?.displayName || project.title}
              </h3>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content section */}
        <div className={`relative z-10 ${isFeatured ? 'p-8' : 'p-6'}`}>
          {/* Category badge */}
          {project.metadata && (
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-white/5 border border-white/10 text-white/70 uppercase">
                {project.metadata.category}
              </span>
            </div>
          )}

          {/* Title and short description */}
          <div className="mb-4">
            <p className="text-white/90 text-sm font-semibold leading-relaxed">
              {project.metadata?.shortDescription || project.description}
            </p>
          </div>

          {/* Key features (for featured cards) */}
          {isFeatured && project.metadata?.keyFeatures && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Key Features
              </p>
              <div className="grid grid-cols-2 gap-2">
                {project.metadata.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-white/70 flex items-start gap-2 group/feature"
                  >
                    <span className="text-white/40 mt-1 group-hover/feature:text-white/70 transition-colors">
                      ✦
                    </span>
                    <span className="group-hover/feature:text-white/90 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact statement */}
          {project.metadata?.impact && (
            <div className="mb-6 p-3 rounded-lg bg-white/3 border border-white/5 hover:border-white/15 transition-colors">
              <p className="text-xs text-white/60 italic">
                ✨ {project.metadata.impact}
              </p>
            </div>
          )}

          {/* Technology stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider hover:bg-white/10 hover:border-white/20 hover:text-white/90 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > (isFeatured ? 6 : 4) && (
                <span className="text-white/50 text-xs px-3 py-1">
                  +{project.technologies.length - (isFeatured ? 6 : 4)} more
                </span>
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="mb-6 flex gap-4 text-xs font-mono text-white/50">
            <div className="flex items-center gap-1 hover:text-white/70 transition-colors">
              <span>⭐</span>
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-white/70 transition-colors">
              <span>🍴</span>
              <span>{project.forks}</span>
            </div>
            <div className="ml-auto text-white/40">
              Updated recently
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap pt-4 border-t border-white/5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center hover:scale-105 active:scale-95"
            >
              GitHub
            </a>
            {project.homepageUrl && (
              <a
                href={project.homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center hover:scale-105 active:scale-95 font-bold"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

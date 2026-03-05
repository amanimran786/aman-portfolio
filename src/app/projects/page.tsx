export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "OSINT WorldView - Global Threat Dashboard",
      icon: "🌐",
      description: "A real-time OSINT dashboard that visualizes global cyber threats, news, and intelligence using public APIs. Features interactive world map, live threat feeds, and advanced filtering for security research.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "OSINT", "API"],
      github: "https://github.com/amanimran786/OSINT-WorldView",
      featured: true,
      color: "from-blue-700 to-cyan-700",
    },
    {
      id: 2,
      title: "PatternQuest - Gamified DSA iOS App",
      icon: "🧩",
      description: "A SwiftUI iOS app for learning Data Structures & Algorithms through interactive levels, pattern recognition, and visual demos. Includes Two Sum, sliding window, and CI/CD with GitHub Actions.",
      technologies: ["Swift", "SwiftUI", "Xcode", "CI/CD", "iOS"],
      github: "https://github.com/amanimran786/PatternQuest",
      featured: true,
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 3,
      title: "AI-Powered Malware Detection System",
      icon: "🤖",
      description: "Advanced machine learning system for detecting malware using AI. Analyzes binary patterns and file signatures to identify threats with high accuracy. Features pattern recognition, threat classification, and real-time scanning.",
      technologies: ["Machine Learning", "Python", "AI", "Security", "Data Analysis"],
      github: "https://github.com/vuvic/AI-Malware-Detection",
      presentation: "https://docs.google.com/presentation/d/1af6iuiVxO3nd28_IsUmNww1rceAlk_6LFbdO3sVzrb8/present",
      report: "https://docs.google.com/document/d/1X_1GQ8wEx9YqaH_LqLTf6bkVLPVntUd5jsI589epnYo/edit",
      abstract: "https://docs.google.com/document/d/1DIYjAzy08sRl6WinudqWnvpBhHo57xwfEJcEJxVCbJQ/edit?tab=t.0",
      featured: true,
      color: "from-red-600 to-orange-600",
    },
    {
      id: 4,
      title: "Phishing Detector Browser Extension",
      icon: "🔍",
      description: "Browser extension powered by machine learning to detect phishing in real-time. Analyzes URLs, email patterns, and website content to warn users about malicious sites. Protects against social engineering and credential theft.",
      technologies: ["Machine Learning", "JavaScript", "Browser API", "Security", "Python"],
      github: "https://github.com/amanimran786/PhishingDetectorExtension",
      presentation: "https://docs.google.com/presentation/d/1vbkgvhzmOOAx04g2mCxhbc4h7DwJwcHlfCwLldmoFEE/present",
      featured: true,
      color: "from-cyan-600 to-blue-600",
    },
    {
      id: 5,
      title: "FinGuard - Personal Finance Desktop App",
      icon: "💸",
      description: "A modern JavaFX desktop app for personal finance management. Features account tracking, transaction history, and analytics. Refactored for performance, maintainability, and robust database handling.",
      technologies: ["Java", "JavaFX", "SQLite", "Maven", "Desktop App"],
      github: "https://github.com/amanimran786/FinGuard",
      featured: true,
      color: "from-amber-600 to-yellow-600",
    },
    {
      id: 6,
      title: "Food Bank Inventory System",
      icon: "🏦",
      description: "Relational database system for managing food banks, inventories, donors, and distributions. Features advanced SQL queries and mathematical notation for database education.",
      technologies: ["Java", "MySQL", "SQL", "Database Design", "DBMS"],
      github: "https://github.com/amanimran786/FoodBankInventorySystem",
    },
    {
      id: 7,
      title: "Smart Mirror Project",
      icon: "🪞",
      description: "IoT-enabled smart mirror displaying real-time info: weather, calendar, news, and system status. Features voice control and customizable displays. Developed with Ohlone Engineering Society.",
      technologies: ["IoT", "JavaScript", "Python", "Hardware Integration", "System Design"],
      leadership: "Ohlone Engineering Society (O.E.S)",
    },
    {
      id: 8,
      title: "Nitrate Detector for Waveriders Project",
      icon: "🧪",
      description: "Environmental sensing system for nitrate pollution in wastewater. Real-time data collection, analysis, and reporting. Demonstrates practical sensor and monitoring tech.",
      technologies: ["Sensors", "Data Analysis", "Arduino", "Environmental Science", "Hardware"],
      leadership: "Ohlone Engineering Society (O.E.S)",
    },
    {
      id: 9,
      title: "NASA Student Launch Program - Rocket",
      icon: "🚀",
      description: "NASA-approved rocket project with Ohlone Physics Club. Includes design, fabrication, and launch. Focus on rocket science and aerospace education.",
      technologies: ["Physics", "Engineering Design", "Systems Integration", "Project Management"],
      leadership: "Ohlone Physics Club & NASA Student Launch",
    },
    {
      id: 10,
      title: "Weather Widget",
      icon: "🌤️",
      description: "Desktop weather widget app with real-time weather data, location-based updates, and forecasting.",
      technologies: ["Python", "API Integration", "GUI", "Data Visualization"],
      github: "https://github.com/amanimran786/Weather_Widget",
    },
  ];

  return (
    <div className="cyber-grid">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-slate-900 to-slate-950/50"></div>
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-lg">
            My Projects
          </h1>
          <p className="text-lg text-slate-300 font-mono">
            Explore the projects I&apos;ve worked on and the technologies I&apos;ve used
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
          🔥 Featured Security &amp; AI Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition-all neon-border border border-red-500/30 transform hover:scale-105"
              >
                {/* Project Image Area - Themed SVG */}
                <div className={`h-48 bg-gradient-to-br ${project.color || 'from-red-900 to-red-800'} relative flex items-center justify-center overflow-hidden`}>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}></div>
                  {/* Scan line */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan-line"></div>
                  </div>
                  {/* Icon & Title */}
                  <div className="relative z-10 text-center px-4">
                    <span className="text-6xl block mb-2 drop-shadow-lg">{project.icon}</span>
                    <p className="text-white/90 text-sm font-mono font-bold tracking-wider uppercase">{project.title.split(' - ')[0]}</p>
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 text-glow">
                    {project.icon} {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors"
                      >
                        {'>> GitHub'}
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors"
                      >
                        {'>> Presentation'}
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors"
                      >
                        {'>> Report'}
                      </a>
                    )}
                    {project.abstract && (
                      <a
                        href={project.abstract}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors"
                      >
                        {'>> Abstract'}
                      </a>
                    )}
                    {/* Proposal and OOD links removed for type safety */}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
          ⚡ Other Notable Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all transform hover:scale-105"
              >
                {/* Mini header with icon */}
                <div className="h-24 bg-gradient-to-br from-slate-700 to-slate-800 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)',
                    backgroundSize: '15px 15px',
                  }}></div>
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
                  <p className="text-slate-300 mb-4 text-sm font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-900/30 border border-red-500/50 text-red-300 px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.leadership && (
                    <p className="text-red-300 text-xs font-mono mb-3">
                      {'>> Leadership: '} {project.leadership}
                    </p>
                  )}
                  <div className="flex gap-2 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold text-sm transition-colors"
                      >
                        {'>> GitHub'}
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold text-sm transition-colors"
                      >
                        {'>> Presentation'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
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

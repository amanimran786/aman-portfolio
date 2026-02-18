export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "🤖 AI-Powered Malware Detection System",
      description: "Advanced machine learning system for detecting malware using AI algorithms. Analyzes binary patterns and file signatures to identify potential threats with high accuracy. Features pattern recognition, threat classification, and real-time scanning capabilities.",
      technologies: ["Machine Learning", "Python", "AI", "Security", "Data Analysis"],
      github: "https://github.com/vuvic/AI-Malware-Detection",
      presentation: "https://docs.google.com/presentation/d/1af6iuiVxO3nd28_IsUmNww1rceAlk_6LFbdO3sVzrb8/present",
      report: "https://docs.google.com/document/d/1X_1GQ8wEx9YqaH_LqLTf6bkVLPVntUd5jsI589epnYo/edit",
      featured: true,
    },
    {
      id: 2,
      title: "🔍 Phishing Detector Browser Extension",
      description: "Machine learning-powered browser extension that detects phishing attempts in real-time. Analyzes URLs, email patterns, and website content to warn users about potentially malicious sites. Helps protect users from social engineering attacks and credential theft.",
      technologies: ["Machine Learning", "JavaScript", "Browser API", "Security", "Python"],
      github: "https://github.com/amanimran786/PhishingDetectorExtension",
      presentation: "https://docs.google.com/presentation/d/1vbkgvhzmOOAx04g2mCxhbc4h7DwJwcHlfCwLldmoFEE/present",
      featured: true,
    },
    {
      id: 3,
      title: "🧠 MindRight - Mental Health Mobile App",
      description: "Comprehensive mobile application for mental health support and wellness tracking. Features mood tracking, meditation guides, journaling, and resources for emotional wellbeing. Built with modern mobile technologies for iOS and Android platforms.",
      technologies: ["SwiftUI", "Kotlin", "Mobile Development", "Firebase", "UI/UX"],
      github: "https://github.com/YTAF20/MindRight",
      presentation: "https://docs.google.com/presentation/d/1tLbLzN3iko1EHQkfmoDFLvH4P6L4ZA5rVL8hBQKikSw/present",
      proposal: "https://docs.google.com/document/d/1CT9VHKcBOpXN_Zw6CfTpH0HbUuMg8uMsEVUyuv3T7XU/edit",
      featured: true,
    },
    {
      id: 4,
      title: "🪞 Smart Mirror Project",
      description: "IoT-enabled smart mirror displaying real-time information including weather, calendar, news, and system status. Features voice control integration and customizable displays. Developed as part of Ohlone Engineering Society innovation initiatives.",
      technologies: ["IoT", "JavaScript", "Python", "Hardware Integration", "System Design"],
      leadership: "Ohlone Engineering Society (O.E.S)",
    },
    {
      id: 5,
      title: "🧪 Nitrate Detector for Waveriders Project",
      description: "Environmental sensing system that detects nitrate pollution levels in organic wastewater. Features real-time data collection, analysis, and reporting. Demonstrates practical application of sensors and environmental monitoring technology.",
      technologies: ["Sensors", "Data Analysis", "Arduino", "Environmental Science", "Hardware"],
      leadership: "Ohlone Engineering Society (O.E.S)",
    },
    {
      id: 6,
      title: "🚀 NASA Student Launch Program - Rocket",
      description: "NASA-approved motorized rocket project developed with Ohlone Physics Club. Includes design, fabrication, and launch. Received official NASA approval for construction and testing. Educational focus on rocket science and aerospace principles.",
      technologies: ["Physics", "Engineering Design", "Systems Integration", "Project Management"],
      leadership: "Ohlone Physics Club & NASA Student Launch",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore the projects I've worked on and the technologies I've used
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
          🔥 Featured Security & AI Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition-all neon-border border border-red-500/30 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center text-4xl animate-glow-pulse">
                  {project.title.charAt(0)}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 text-glow">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded-full text-sm font-mono animate-pulse"
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
                    {project.proposal && (
                      <a
                        href={project.proposal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-mono font-semibold transition-colors"
                      >
                        {'>> Proposal'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* All Projects */}
        <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
          ⚡ Other Notable Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-red-400 mb-2 text-glow">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm font-mono">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-900/30 border border-red-500/50 text-red-300 px-2 py-1 rounded text-xs font-mono animate-pulse"
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
                      GitHub →
                    </a>
                  )}
                  {project.presentation && (
                    <a
                      href={project.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-mono font-semibold text-sm transition-colors"
                    >
                      Presentation →
                    </a>
                  )}
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
            Let's build secure, innovative solutions together
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
  );
}

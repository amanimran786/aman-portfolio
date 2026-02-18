export default function Skills() {
  const skillCategories = [
    {
      category: "🔒 Security & Cybersecurity",
      skills: [
        "OWASP Top 10",
        "Secure Coding",
        "Authentication & Authorization",
        "Encryption & Hashing",
        "Security Testing",
        "Penetration Testing",
        "Threat Analysis",
        "Binary Analysis",
      ],
    },
    {
      category: "🤖 AI & Machine Learning",
      skills: [
        "Machine Learning",
        "AI Algorithms",
        "Neural Networks",
        "Data Analysis",
        "Pattern Recognition",
        "Model Training",
        "Threat Detection",
      ],
    },
    {
      category: "📱 Mobile Development",
      skills: [
        "SwiftUI",
        "Kotlin",
        "Android Studio",
        "Xcode",
        "Mobile UI/UX",
        "iOS Development",
        "Android Development",
      ],
    },
    {
      category: "💻 Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "Python",
        "C++",
        "TypeScript",
        "HTML/CSS",
        "Swift",
        "Kotlin",
      ],
    },
    {
      category: "🛠️ Development Tools",
      skills: [
        "GitHub",
        "Git",
        "IntelliJ",
        "Android Studio",
        "Xcode",
        "VS Code",
        "Slack",
        "Microsoft Office",
        "GSuite",
      ],
    },
    {
      category: "📊 Data & Databases",
      skills: [
        "SQL",
        "Database Management",
        "Tableau",
        "Data Structures",
        "Data Analysis",
        "DBMS",
        "Query Optimization",
      ],
    },
    {
      category: "🏗️ Software Architecture",
      skills: [
        "System Design",
        "Architecture Patterns",
        "Scalability",
        "Database Design",
        "API Design",
        "Microservices",
      ],
    },
    {
      category: "🎓 Professional Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Organization",
        "Collaboration",
        "Integrity",
        "Leadership",
        "Project Management",
      ],
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
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-white mb-4 text-glow-lg">
            🔧 System Capabilities
          </h1>
          <p className="text-lg text-slate-300 font-mono">
            Technical expertise and professional capabilities across security, AI, and full-stack development
          </p>
        </section>

        {/* Skills Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all transform hover:scale-105"
              >
                <h2 className="text-lg font-bold text-red-400 mb-4 text-glow">
                  {category.category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-xs font-mono hover:bg-red-900/50 transition-colors animate-pulse"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-red-950/80 to-red-900/80 backdrop-blur-sm text-white py-16 border-t border-red-500/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-glow-lg font-mono mb-4">
              {'< READY_TO_DEPLOY />'}
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
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="cyber-grid">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-slate-900 to-slate-950/50"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-block bg-red-900/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/50 animate-pulse-border">
                🔐 SECURITY_ENGINEER [ACTIVE]
              </span>
            </div>

            {/* Animated Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-glow-pulse">
              {'<'} Aman Imran {'>'}
            </h1>

            {/* Glitchy Subtitle */}
            <div className="mb-4 relative h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-red-500 font-mono font-semibold animate-glitch">
                FULL_STACK_DEVELOPER | CYBERSECURITY | AI_ENTHUSIAST
              </p>
            </div>

            {/* Typing effect text */}
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto font-mono animate-float">
              {'> Building secure, scalable applications with military-grade security'}
              <span className="terminal-cursor"></span>
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-600/50 neon-border-glow transform hover:scale-105 active:scale-95"
              >
                🎯 INITIATE_PROJECTS.exe
              </Link>
              <Link
                href="/about"
                className="inline-block bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-slate-600 hover:border-red-500 transform hover:scale-105 active:scale-95"
              >
                📋 SYSTEM_INFO
              </Link>
            </div>
          </div>
        </section>

        {/* Matrix Rain Background */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>

        {/* Featured Section - Sci-Fi Theme */}
        <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-16 backdrop-blur-sm border-y border-red-500/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
              ⚡ ELITE_SECURITY_PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 neon-border transform hover:scale-105 border border-red-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl animate-float">🔐</span>
                  <h3 className="text-xl font-bold text-red-400 text-glow">
                    SECURE_ARCHITECTURE
                  </h3>
                </div>
                <p className="text-slate-300 mb-4 font-mono text-sm">
                  Zero-trust security model • AES-256 encryption • JWT auth • Rate limiting • DDoS protection
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'TypeScript', 'Security'].map((tech) => (
                    <span key={tech} className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-xs font-mono animate-pulse">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-red-400 hover:text-red-300 font-mono text-sm font-semibold transition-colors">
                  {'>> EXECUTE_PROJECT.sh'}
                </a>
              </div>

              {/* Project Card 2 */}
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 neon-border transform hover:scale-105 border border-red-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl animate-rotate-3d">🎯</span>
                  <h3 className="text-xl font-bold text-red-400 text-glow">
                    CTF_SOLUTIONS
                  </h3>
                </div>
                <p className="text-slate-300 mb-4 font-mono text-sm">
                  Binary exploitation • Cryptography • Web security • Buffer overflow • Privilege escalation
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'Algorithms', 'Security'].map((tech) => (
                    <span key={tech} className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-xs font-mono animate-pulse">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-red-400 hover:text-red-300 font-mono text-sm font-semibold transition-colors">
                  {'>> SOLVE_CHALLENGE.py'}
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 font-mono neon-border-glow transform hover:scale-105"
              >
                {'>>> LOAD_ALL_PROJECTS'}
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section - Glowing Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow-lg">
            🔧 SYSTEM_CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SECURE_DEVELOPMENT',
                skills: ['OWASP Top 10', 'Secure Coding', 'Auth & AuthZ', 'Encryption', 'Pen Testing'],
              },
              {
                title: 'FULL_STACK_CORE',
                skills: ['Next.js', 'Node.js', 'Databases', 'API_SEC', 'Cloud_Arch'],
              },
              {
                title: 'PROBLEM_SOLVING',
                skills: ['Algorithms', 'System_Design', 'Performance', 'Binary_Analysis', 'CTF'],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 neon-border border border-red-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-red-600/30"
              >
                <h3 className="text-xl font-bold text-red-400 mb-4 font-mono text-glow">
                  {`[${category.title}]`}
                </h3>
                <ul className="text-slate-300 space-y-2 text-sm font-mono">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="hover:text-red-400 transition-colors">
                      {'>'} {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Epic */}
        <section className="bg-gradient-to-r from-red-950/80 to-red-900/80 backdrop-blur-sm text-white py-16 border-t border-red-500/30 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-glow-lg font-mono">
              {'< SECURITY_FIRST_DEVELOPMENT />'}
            </h2>
            <p className="text-lg mb-8 text-red-100 font-mono">
              {'>> READY_FOR_COLLABORATION = true'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aman.imran@sjsu.edu"
                className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 font-mono neon-border-glow"
              >
                {'>> SEND_MESSAGE'}
              </a>
              <a
                href="https://github.com/amanimran786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-mono border-2 border-red-500"
              >
                {'>> VIEW_GITHUB'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

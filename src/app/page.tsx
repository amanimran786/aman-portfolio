import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-red-900/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/50">
              🔐 Software Engineer | Cybersecurity Enthusiast
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Aman Imran
          </h1>
          <p className="text-xl md:text-2xl text-red-600 dark:text-red-400 mb-4 font-semibold">
            Full-Stack Developer | Security-First Architecture | Problem Solver
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Building secure, scalable web applications with a focus on cybersecurity best practices. 
            Passionate about secure coding, system design, and solving complex algorithmic challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-red-600/50"
            >
              View My Secure Projects
            </Link>
            <Link
              href="/about"
              className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Learn My Background
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section - Security Focused */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            🛡️ Featured Security Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-red-600/20 transition-all border border-red-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔐</span>
                <h3 className="text-xl font-bold text-white">
                  Secure Portfolio Platform
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Full-stack web application with secure authentication, encrypted data storage, and HTTPS/SSL implementation. Built with security-first architecture principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  TypeScript
                </span>
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  Security
                </span>
              </div>
              <a href="#" className="text-red-400 hover:text-red-300 font-semibold">
                View Project →
              </a>
            </div>

            {/* Project Card */}
            <div className="bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-red-600/20 transition-all border border-red-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold text-white">
                  Algorithm & CTF Solutions
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Optimized LeetCode solutions with detailed security considerations, binary analysis, and cryptography problem-solving approaches.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  Python
                </span>
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  Algorithms
                </span>
                <span className="bg-red-900/30 border border-red-500/50 text-red-300 px-3 py-1 rounded text-sm">
                  CTF
                </span>
              </div>
              <a href="#" className="text-red-400 hover:text-red-300 font-semibold">
                View Solutions →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View All Security Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview - Security Focused */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          🔧 Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Secure Development
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2 text-sm">
              <li>✓ OWASP Top 10</li>
              <li>✓ Secure Coding</li>
              <li>✓ Authentication & Authorization</li>
              <li>✓ Encryption & Hashing</li>
              <li>✓ Security Testing</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Full-Stack Development
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2 text-sm">
              <li>✓ Next.js & React</li>
              <li>✓ Node.js & Express</li>
              <li>✓ Database Design</li>
              <li>✓ API Security</li>
              <li>✓ Cloud Architecture</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Problem Solving
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2 text-sm">
              <li>✓ Data Structures</li>
              <li>✓ Algorithms</li>
              <li>✓ System Design</li>
              <li>✓ Performance Optimization</li>
              <li>✓ CTF Challenges</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build Secure Solutions Together
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Interested in security-first development, system design, or collaboration on secure projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aman.imran@sjsu.edu"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/amanimran786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

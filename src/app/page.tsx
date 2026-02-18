import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm Aman Imran
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Full-stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I build scalable web applications and solve complex problems through clean, efficient code.
            Passionate about learning new technologies and contributing to open-source projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Portfolio Website
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Modern portfolio built with Next.js, TypeScript, and Tailwind CSS showcasing projects and skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                NeetCode Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Collection of optimized LeetCode solutions with detailed explanations and algorithm analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">
                  Python
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">
                  JavaScript
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">
                  Algorithms
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:aman.imran@sjsu.edu"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

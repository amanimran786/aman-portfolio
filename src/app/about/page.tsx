export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Learn more about my journey and background
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Who I Am
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I'm a full-stack developer with a passion for building scalable and efficient web applications. 
              Currently pursuing my degree at San Jose State University, I combine academic knowledge with 
              practical experience to solve real-world problems.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              My journey in tech started with a curiosity about how things work, which led me to explore 
              programming languages, frameworks, and system design principles. I believe in continuous learning 
              and staying updated with the latest technologies and best practices.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              When I'm not coding, you can find me solving algorithmic problems on LeetCode, contributing to 
              open-source projects, or exploring new technologies that push the boundaries of what's possible 
              on the web.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Key Highlights
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Education
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  San Jose State University (SJSU) - Computer Science
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Focus Areas
                </h3>
                <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside space-y-2">
                  <li>Full-stack Web Development</li>
                  <li>Algorithm & Data Structures</li>
                  <li>System Design</li>
                  <li>Database Architecture</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Interests
                </h3>
                <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside space-y-2">
                  <li>Open Source Contributions</li>
                  <li>Competitive Programming</li>
                  <li>Cloud Technologies</li>
                  <li>Developer Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            I'm always open to new opportunities and collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aman.imran@sjsu.edu"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Send me an Email
            </a>
            <a
              href="https://www.linkedin.com/in/aman-i-636013111/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

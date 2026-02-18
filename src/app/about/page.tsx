export default function About() {
  return (
    <div className="cyber-grid">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-slate-900 to-slate-950/50"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-white mb-8 text-glow-lg">
            🔐 About Me
          </h1>

          {/* Main Story */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-red-500/30 mb-8">
            <p className="text-lg text-slate-300 mb-6 font-mono">
              Greetings! My name is <span className="text-red-400 font-bold">Aman Imran</span>, and I recently graduated from San José State University with a <span className="text-red-400 font-bold">B.S. in Software Engineering</span>.
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              My passion for engineering began at a young age, especially after diving into video games. What started as playing for fun quickly evolved into curiosity about how these worlds were built—leading me to discover computer science. That curiosity guided my path through high school STEM programs, then Ohlone College, and ultimately to SJSU, where I strengthened both my technical foundation and professional direction.
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              During my time at Ohlone, I served in leadership roles within the <span className="text-red-400">Ohlone Engineering Society (O.E.S)</span> and the <span className="text-red-400">Ohlone Physics Club</span>. I helped coordinate and contribute to hands-on engineering projects ranging from fundamental design challenges to developing a <span className="text-red-400">nitrate-sensing system</span> that detects pollution in organic waste water. These collaborative projects helped me build the practical engineering, teamwork, and problem-solving skills essential to the industry.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My most recent role was as a <span className="text-red-400 font-bold">Software Engineering Mobile Developer Intern at Lawrence Livermore National Laboratory</span>. There, I created interactive physics learning modules and leveraged mobile sensors to design experiments that help high school students better understand physics concepts. This experience further solidified my commitment to engineering work that blends innovation, education, and real-world impact.
            </p>
          </div>

          {/* Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-red-400 mb-4 text-glow">🎓 Education</h3>
              <ul className="space-y-3 text-slate-300 font-mono">
                <li><span className="text-red-400">{'>'}</span> B.S. Software Engineering - SJSU</li>
                <li><span className="text-red-400">{'>'}</span> Transfer Student - Ohlone College</li>
                <li><span className="text-red-400">{'>'}</span> STEM Programs - High School</li>
                <li><span className="text-red-400">{'>'}</span> Focus: Full-Stack, Security, Mobile Dev</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 neon-border border border-red-500/30 hover:shadow-xl hover:shadow-red-600/30 transition-all">
              <h3 className="text-xl font-bold text-red-400 mb-4 text-glow">💼 Experience</h3>
              <ul className="space-y-3 text-slate-300 font-mono">
                <li><span className="text-red-400">{'>'}</span> Software Engineering Mobile Developer Intern</li>
                <li className="text-sm text-slate-400 pl-4">@ Lawrence Livermore National Lab</li>
                <li><span className="text-red-400">{'>'}</span> Created interactive physics learning modules</li>
                <li><span className="text-red-400">{'>'}</span> Designed mobile sensor experiments</li>
              </ul>
            </div>
          </div>

          {/* Leadership & Volunteering */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-red-500/30">
            <h2 className="text-2xl font-bold text-red-400 mb-6 text-glow">⭐ Leadership & Volunteering</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-red-300 mb-3">🔧 Ohlone Engineering Society (O.E.S)</h3>
                <ul className="space-y-2 text-slate-300 font-mono text-sm">
                  <li>▸ Smart Mirror Project</li>
                  <li>▸ Nitrate Detector for Waveriders Project</li>
                  <li>▸ CCIC Innovation Challenge Participant</li>
                  <li>▸ Coordinated hands-on engineering projects</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-red-300 mb-3">🚀 Ohlone Physics Club</h3>
                <ul className="space-y-2 text-slate-300 font-mono text-sm">
                  <li>▸ Ran tutoring sessions for members</li>
                  <li>▸ NASA Approval - Built motorized rocket</li>
                  <li>▸ NASA Student Launch Program Participant</li>
                  <li>▸ Taught rocket science fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

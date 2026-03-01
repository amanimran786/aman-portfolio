'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Aman Imran</h3>
            <p className="text-slate-400 text-sm">
              Full-stack developer passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <br />
              <Link href="/projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <br />
              <Link href="/skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                Skills
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.linkedin.com/in/aman-i-636013111/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://github.com/amanimran786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <br />
              <a
                href="mailto:aman.imran@sjsu.edu"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} Aman Imran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { GITHUB_PROFILE_URL } from '@/lib/links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githubUrl = GITHUB_PROFILE_URL;
  const displayName = 'Aman Imran';
  const shortBio = 'Full-stack and security-focused engineer building reliable, scalable products.';

  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">{displayName}</h3>
            <p className="text-slate-400 text-sm">{shortBio}</p>
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
                href={githubUrl}
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
            © {currentYear} {displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

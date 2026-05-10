import Link from 'next/link';
import { CONTACT_EMAIL, GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, RESUME_URL } from '@/lib/links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const displayName = 'Aman Imran';
  const shortBio = 'Security, Trust & Safety, and AI-focused professional working across incident response, abuse detection, SQL/Python investigations, and detection systems.';

  return (
    <footer className="relative z-10 bg-white dark:bg-[var(--surface)] border-t border-slate-200 dark:border-slate-700 mt-12">
      {/* Top gradient accent */}
      <div className="h-[3px] arctic-gradient" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-3">{displayName}</h3>
            <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">{shortBio}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Skills
              </Link>
              <a href={RESUME_URL} className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-3">Connect</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-700 pt-8">
          <p className="text-center text-slate-400 dark:text-slate-500 text-sm">
            &copy; {currentYear} {displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

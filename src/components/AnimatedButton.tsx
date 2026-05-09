'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function AnimatedButton({ href, children, variant = 'primary' }: AnimatedButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={`inline-block font-bold py-3 px-8 rounded-xl transition-all duration-300 relative overflow-hidden group ${
          isPrimary
            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40'
            : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-sky-300 hover:text-sky-600 shadow-sm'
        }`}
      >
        {/* Shimmer effect on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}

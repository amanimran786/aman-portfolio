'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function AnimatedButton({ href, children, variant = 'primary' }: AnimatedButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const baseStyles = "inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 transform active:scale-95 relative overflow-hidden group";
  
  const primaryStyles = "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-600/50 neon-border-glow hover:scale-105";
  
  const secondaryStyles = "bg-slate-800 hover:bg-slate-700 text-slate-100 border-2 border-slate-600 hover:border-red-500 hover:scale-105";

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${isAnimating ? 'animate-cyber-pulse' : ''}`}
    >
      {/* Cybersecurity glow effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
      
      {/* Text content */}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

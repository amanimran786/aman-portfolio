'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hideTimer = setTimeout(() => setIsLoading(false), 2800);

    // Animate progress from 0 to 100 over ~2.5s
    const start = Date.now();
    const duration = 2500;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!isLoading) return null;

  const filled = Math.round((progress / 100) * 18);
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(18 - filled);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Main Loading Screen */}
      <div className="absolute inset-0 bg-black animate-fade-out-slow">
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Animated Terminal Window */}
          <div className="border-2 border-red-500 bg-black/80 backdrop-blur-sm p-6 rounded-lg max-w-2xl w-96 shadow-2xl shadow-red-500/50 animate-glow-pulse">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <span className="ml-4 text-red-400 text-sm font-mono font-bold">SYSTEM_INITIALIZATION.exe</span>
            </div>

            {/* Loading Text */}
            <div className="font-mono text-sm text-red-400 space-y-2">
              <div className="animate-type-text">
                <span className="text-green-400">&gt;</span> Initializing Security_Framework...
              </div>
              <div className="animate-type-text" style={{ animationDelay: '0.4s' }}>
                <span className="text-green-400">&gt;</span> Loading Encryption_Modules...
              </div>
              <div className="animate-type-text" style={{ animationDelay: '0.8s' }}>
                <span className="text-green-400">&gt;</span> Booting AI_Systems...
              </div>
              <div className="animate-type-text" style={{ animationDelay: '1.2s' }}>
                <span className="text-green-400">&gt;</span> Deploying Cybersecurity_Defense...
              </div>
              <div className="animate-type-text" style={{ animationDelay: '1.6s' }}>
                <span className="text-green-400">&gt;</span> Initializing Portal... [<span className="text-red-500 font-bold">OK</span>]
              </div>

              {/* Loading Bar */}
              <div className="mt-4 bg-slate-900 border border-red-500/50 h-2 rounded overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Status — live counter */}
              <div className="text-right text-xs text-red-300 mt-2 font-mono">
                [{bar}] {progress}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Main Loading Screen */}
      <div className="absolute inset-0 bg-black animate-fade-out-slow">
        {/* Scanline overlay */}
        <div className="absolute inset-0 animate-scan-line-fast opacity-20"></div>

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
                <div className="h-full bg-gradient-to-r from-red-500 to-red-600 animate-loading-bar"></div>
              </div>

              {/* Status */}
              <div className="text-right text-xs text-red-300 mt-2 animate-pulse">
                [████████████░░░░░░] 85%
              </div>
            </div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.6 + 0.2,
                }}
              ></div>
            ))}
          </div>

          {/* Grid Lines Animation */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-red-500/10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Glitch Lines */}
      <div className="absolute top-1/4 left-0 w-full h-32 bg-red-500/20 animate-glitch-line" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-0 w-full h-16 bg-red-500/10 animate-glitch-line" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
}

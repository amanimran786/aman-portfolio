'use client';

import { useEffect, useState } from 'react';

const loadingLines = [
  { text: 'Initializing Security_Framework...', delay: 0 },
  { text: 'Loading Encryption_Modules...', delay: 400 },
  { text: 'Booting AI_Systems...', delay: 800 },
  { text: 'Deploying Cybersecurity_Defense...', delay: 1200 },
  { text: 'Establishing Secure_Connection...', delay: 1600 },
  { text: 'Initializing Portal...', delay: 2000, ok: true },
];

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    // Reveal each line with its delay
    const timers = loadingLines.map((line, idx) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, idx]), line.delay)
    );

    // Animate progress bar from 0 → 100 over 2.5s
    const start = Date.now();
    const duration = 2500;
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Start fade-out after all lines revealed + bar filled
    const fadeTimer = setTimeout(() => setIsFading(true), 2800);
    // Remove from DOM after fade completes
    const hideTimer = setTimeout(() => setIsVisible(false), 3600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  const filled = Math.round((progress / 100) * 20);
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(20 - filled);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black">
        {/* Scan-line overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 animate-scan-line-fast" />
        </div>
      </div>

      {/* Centered terminal card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="border-2 border-red-500 bg-black/90 backdrop-blur-sm p-6 rounded-lg w-full max-w-md shadow-2xl shadow-red-500/40 animate-glow-pulse">
          {/* Title bar */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.15s' }} />
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span className="ml-3 text-red-400 text-xs font-mono font-bold tracking-wider">
              SYSTEM_INITIALIZATION.exe
            </span>
          </div>

          {/* Log lines */}
          <div className="font-mono text-sm space-y-2 min-h-[10rem]">
            {loadingLines.map((line, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-1 transition-all duration-300 ${
                  visibleLines.includes(idx)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                <span className="text-green-400">&gt;</span>
                <span className="text-red-400">{line.text}</span>
                {line.ok && visibleLines.includes(idx) && (
                  <span className="text-green-400 font-bold ml-1">[OK]</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="bg-slate-900 border border-red-500/40 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* ASCII bar + percentage */}
            <div className="flex items-center justify-between mt-2 text-xs font-mono text-red-300">
              <span>[{bar}]</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

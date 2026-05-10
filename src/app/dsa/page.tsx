"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { DSA_SOLUTIONS_URL } from "@/lib/links";
import { useMemo, useState } from "react";

const tracks = [
  {
    id: "arrays",
    title: "Arrays & Strings",
    focus: "Two pointers, sliding window, counting",
    quests: ["Two Sum", "Valid Anagram", "Longest Substring"],
    boss: "Minimum Window Substring",
  },
  {
    id: "hashing",
    title: "Hash Maps & Sets",
    focus: "Counting, prefix sums, collisions",
    quests: ["Group Anagrams", "Top K Frequent", "Subarray Sum = K"],
    boss: "Longest Consecutive Sequence",
  },
  {
    id: "stacks",
    title: "Stacks & Queues",
    focus: "Monotonic patterns, BFS",
    quests: ["Valid Parentheses", "Min Stack", "Daily Temperatures"],
    boss: "Largest Rectangle in Histogram",
  },
  {
    id: "binary-search",
    title: "Binary Search",
    focus: "Bounded search, predicate to answer",
    quests: ["Binary Search", "Search 2D Matrix", "Koko Eating Bananas"],
    boss: "Median of Two Sorted Arrays",
  },
  {
    id: "trees",
    title: "Trees & Graphs",
    focus: "DFS/BFS, traversal patterns",
    quests: ["Invert Binary Tree", "Level Order", "Clone Graph"],
    boss: "Number of Islands",
  },
  {
    id: "dp",
    title: "Dynamic Programming",
    focus: "States, transitions, memo vs tabulation",
    quests: ["Climbing Stairs", "House Robber", "Coin Change"],
    boss: "Longest Increasing Subsequence",
  },
  {
    id: "greedy",
    title: "Greedy & Intervals",
    focus: "Sorting plus choice proofs",
    quests: ["Merge Intervals", "Non-overlapping Intervals", "Jump Game"],
    boss: "Course Schedule / Topo Sort",
  },
  {
    id: "recursion",
    title: "Backtracking",
    focus: "Search tree, pruning, ordering",
    quests: ["Permutations", "Subsets", "Combination Sum"],
    boss: "N-Queens mini",
  },
] as const;

const sprintTemplates = [
  {
    title: "30-min Daily Sprint",
    duration: "0:30",
    steps: ["5m warm-up", "15m medium pattern", "10m notes and flashcards"],
  },
  {
    title: "90-min Deep Dive",
    duration: "1:30",
    steps: ["10m pattern review", "60m two mediums or one hard", "20m rewrite and edge cases"],
  },
  {
    title: "Weekend Boss Rush",
    duration: "2:30",
    steps: ["20m choose theme", "90m three timed mediums", "40m memory rewrite and retro"],
  },
];

const dailyMissions = [
  {
    title: "Pattern Reps",
    tasks: ["Do 1 warm-up under 5m", "Solve 1 medium timed", "Write 3 proof bullets"],
  },
  {
    title: "Skill XP",
    tasks: ["Explain the pattern aloud", "Draw states for DP", "Log 2 failing edge cases"],
  },
  {
    title: "Recovery",
    tasks: ["Review yesterday's notes", "Flash 5 spaced cards", "Commit solution notes"],
  },
];

export default function DsaLab() {
  const [cleared, setCleared] = useState<Record<string, boolean>>({});
  const [streak, setStreak] = useState(3);

  const completedCount = useMemo(
    () => tracks.filter((track) => cleared[track.id]).length,
    [cleared]
  );

  const xp = completedCount * 50;
  const level = 1 + Math.floor(xp / 150);
  const progress = Math.min(100, ((xp % 150) / 150) * 100);

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="h-[3px] w-24 arctic-gradient rounded-full mb-6" />
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-sky-500 mb-3">
            NeetCode training mode
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Gamified DSA Lab
              </h1>
              <p className="text-slate-500 max-w-2xl mt-4 leading-relaxed">
                Pattern-first algorithm practice with XP, boss fights, daily missions, and sprint loadouts.
              </p>
            </div>
            <Link
              href="https://neetcode.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 hover:shadow-sky-500/40"
            >
              Jump to NeetCode
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center justify-between mb-3 text-slate-400 text-sm font-semibold">
                <span>Level</span>
                <span>{xp} XP</span>
              </div>
              <div className="flex items-end gap-3">
                <p className="text-5xl font-extrabold text-sky-600">{level}</p>
                <p className="text-slate-400 text-sm">Next at 150 XP</p>
              </div>
              <div className="mt-5 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full arctic-gradient" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-3 text-xs text-slate-400 font-semibold">
                {completedCount} / {tracks.length} bosses cleared
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center justify-between mb-3 text-slate-400 text-sm font-semibold">
                <span>Daily Streak</span>
                <button
                  onClick={() => setStreak((s) => s + 1)}
                  className="rounded-full border border-sky-200 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-500/10 px-3 py-1 text-sky-600 dark:text-sky-400 transition-colors hover:bg-sky-100 dark:hover:bg-sky-500/20"
                  aria-label="Increment streak"
                >
                  +1
                </button>
              </div>
              <div className="text-5xl font-extrabold text-sky-600">{streak}d</div>
              <p className="text-slate-500 mt-3 text-sm">Win today with one warm-up, one medium, and notes.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.19}>
            <div className="glass-card p-6 h-full">
              <p className="text-sm text-sky-600 font-bold mb-2">Mission Focus</p>
              <p className="text-xl font-extrabold text-slate-900">Pattern-first learning</p>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                Map the problem to a known pattern, draft brute force, then tighten the complexity.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Pattern > problem", "Edge-case first", "Explain aloud"].map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollReveal className="lg:col-span-2">
            <div className="glass-card p-6 h-full">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900">Roadmap</h2>
                <p className="text-slate-400 text-sm font-semibold">Toggle when you beat the boss</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tracks.map((track) => {
                  const done = !!cleared[track.id];
                  return (
                    <div
                      key={track.id}
                      className={`relative rounded-xl border p-4 transition-all ${
                        done
                          ? "border-emerald-200 bg-emerald-50/80 shadow-lg shadow-emerald-500/10"
                          : "border-sky-100 bg-white/70 dark:bg-[rgba(19,28,49,0.5)] hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-400 font-semibold">{track.focus}</p>
                          <h3 className="text-lg font-extrabold text-slate-900 mt-1">{track.title}</h3>
                        </div>
                        <button
                          onClick={() => setCleared((prev) => ({ ...prev, [track.id]: !done }))}
                          className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full border transition-colors ${
                            done
                              ? "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30"
                              : "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/30 hover:bg-sky-100 dark:hover:bg-sky-500/20"
                          }`}
                          aria-label={`Mark ${track.title} as ${done ? "uncleared" : "cleared"}`}
                        >
                          {done ? "Cleared" : "Clear"}
                        </button>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-xs uppercase text-slate-400 font-bold tracking-wide">Core quests</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {track.quests.map((quest) => (
                              <span key={quest} className="rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-[var(--surface)] px-2.5 py-1 text-xs text-slate-600 dark:text-slate-400">
                                {quest}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg bg-sky-50 dark:bg-sky-500/10 border border-sky-100 dark:border-sky-500/20 px-3 py-2 text-sm font-semibold text-sky-700 dark:text-sky-300">
                          Boss fight: {track.boss}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} direction="right">
            <div className="glass-card p-6 h-full space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-slate-900">Daily Missions</h2>
                <span className="text-xs text-sky-600 font-bold">XP +10 each</span>
              </div>
              <div className="space-y-3">
                {dailyMissions.map((mission) => (
                  <div key={mission.title} className="rounded-xl border border-sky-100 dark:border-sky-500/15 bg-white/70 dark:bg-[rgba(19,28,49,0.5)] p-4">
                    <p className="text-sm text-sky-600 font-bold">{mission.title}</p>
                    <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                      {mission.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <span className="text-sky-400 mt-0.5">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollReveal className="lg:col-span-2">
            <div className="glass-card p-6 h-full">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900">Sprint Loadouts</h2>
                <p className="text-slate-400 text-sm font-semibold">Pick one and press start</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sprintTemplates.map((sprint) => (
                  <div key={sprint.title} className="rounded-xl border border-sky-100 dark:border-sky-500/15 bg-white/70 dark:bg-[rgba(19,28,49,0.5)] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-extrabold text-slate-900">{sprint.title}</h3>
                      <span className="rounded-full bg-sky-50 dark:bg-sky-500/10 px-2.5 py-1 text-xs font-bold text-sky-600 dark:text-sky-400">
                        {sprint.duration}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                      {sprint.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="text-sky-400 mt-0.5">▹</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} direction="right">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Pattern Ladder</h3>
              <p className="text-slate-500 text-sm mb-4">Clear in order until each pattern feels automatic.</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                {["Sliding window", "Monotonic stack", "Prefix sums", "Binary search on answer", "Backtracking template", "Topological sort", "1D/2D DP"].map((item, idx) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-xs text-sky-500 font-bold">{String(idx + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl bg-sky-50/70 dark:bg-sky-500/8 border border-sky-100 dark:border-sky-500/15 p-4">
                <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">Boss practice</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Pick one old boss and solve from memory. No peeking for 20 minutes.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-[length:200%_100%] p-6 text-white shadow-xl shadow-sky-500/20 animate-[gradient-flow_6s_ease_infinite]">
            <div className="absolute inset-0 shimmer-arctic opacity-30" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-sm text-sky-100 font-bold uppercase tracking-wide">Ship solutions fast</p>
                <h3 className="text-2xl font-extrabold mt-1">Checklist before hitting submit</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-sky-50">
                  <li>▹ State the pattern and why it applies</li>
                  <li>▹ Explain time and space plainly</li>
                  <li>▹ Test empty, single, extremes, duplicates</li>
                  <li>▹ Dry run the smallest failing example</li>
                </ul>
              </div>
              <Link
                href={DSA_SOLUTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-sky-600 shadow-lg transition-all hover:scale-105 hover:bg-sky-50"
              >
                Log solutions repo
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
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
    focus: "Bounded search, predicate -> answer",
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
    focus: "Sorting + choice proofs",
    quests: ["Merge Intervals", "Non-overlapping Intervals", "Jump Game"],
    boss: "Course Schedule / Topo Sort",
  },
  {
    id: "recursion",
    title: "Backtracking",
    focus: "Search tree, pruning, ordering",
    quests: ["Permutations", "Subsets", "Combination Sum"],
    boss: "N-Queens (mini)",
  },
] as const;

const sprintTemplates = [
  {
    title: "30-min Daily Sprint",
    duration: "0:30",
    steps: ["5m: quick warm-up (easy)", "15m: 1 medium pattern", "10m: notes + flashcards"],
  },
  {
    title: "90-min Deep Dive",
    duration: "1:30",
    steps: [
      "10m: review cheatsheet & pattern",
      "60m: 2 mediums or 1 hard with iterations",
      "20m: rewrite in own words + edge cases",
    ],
  },
  {
    title: "Weekend Boss Rush",
    duration: "2:30",
    steps: [
      "20m: pick theme & read solutions",
      "90m: 3 mediums (timer on)",
      "20m: implement from memory",
      "20m: retrospective & spaced repetition items",
    ],
  },
];

const dailyMissions = [
  {
    title: "Pattern Reps",
    tasks: [
      "Do 1 warm-up in < 5m",
      "Solve 1 medium timed (20-25m)",
      "Write 3 bullet proof-of-correctness",
    ],
  },
  {
    title: "Skill XP",
    tasks: [
      "Explain aloud: why binary search works",
      "Draw states for today’s DP",
      "Note 2 failing edge cases for each problem",
    ],
  },
  {
    title: "Recovery",
    tasks: ["Review yesterday’s notes", "Flash 5 spaced cards", "Commit solutions repo"],
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
    <div className="cyber-grid">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-slate-900 to-slate-950/60" />
      </div>

      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-mono text-red-300">NEETCODE OPS CENTER / TRAINING MODE</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 text-glow-lg">
                Gamified DSA Lab
              </h1>
              <p className="text-slate-300 max-w-2xl mt-4 font-mono">
                Level up algorithms with short sprints, pattern-first quests, and boss fights. Track XP, keep a streak, and ship solutions fast.
              </p>
            </div>
            <Link
              href="https://neetcode.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-all neon-border-glow"
            >
              Jump to NeetCode
              <span className="text-lg">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/60 border border-red-500/30 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-2 text-slate-400 font-mono text-sm">
                <span>Level</span>
                <span>{xp} XP</span>
              </div>
              <div className="flex items-end gap-3">
                <p className="text-5xl font-bold text-red-400">{level}</p>
                <p className="text-slate-400 font-mono">Next at 150 XP</p>
              </div>
              <div className="mt-4 h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-400 font-mono">{completedCount} / {tracks.length} bosses cleared</p>
            </div>

            <div className="bg-slate-800/60 border border-red-500/30 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-2 text-slate-400 font-mono text-sm">
                <span>Daily Streak</span>
                <button
                  onClick={() => setStreak((s) => s + 1)}
                  className="text-red-300 hover:text-red-100 font-semibold"
                  aria-label="Increment streak"
                >
                  +1
                </button>
              </div>
              <div className="text-5xl font-bold text-red-400">{streak}d</div>
              <p className="text-slate-300 font-mono mt-2">Win today: 1 warm-up + 1 medium + notes</p>
            </div>

            <div className="bg-slate-800/60 border border-red-500/30 rounded-xl p-5 shadow-xl">
              <p className="text-sm text-red-300 font-mono mb-2">Mission Focus</p>
              <p className="text-xl font-bold text-white">Pattern-first learning</p>
              <p className="text-slate-300 font-mono mt-2">Solve by mapping to patterns. Optimize after a brute-force draft.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Pattern > Problem", "Talk out loud", "Edge-case first"].map((tag) => (
                  <span key={tag} className="text-xs bg-red-900/40 border border-red-500/40 text-red-200 px-3 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/60 border border-red-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white text-glow">Roadmap</h2>
                <p className="text-slate-400 font-mono text-sm">Toggle when you beat the boss</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tracks.map((track) => {
                  const done = !!cleared[track.id];
                  return (
                    <div
                      key={track.id}
                      className={`relative rounded-xl border p-4 backdrop-blur-sm transition-all ${
                        done
                          ? "border-green-400/60 bg-green-900/20 shadow-green-500/20"
                          : "border-red-500/30 bg-slate-800/60 hover:shadow-red-500/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm text-slate-400 font-mono">{track.focus}</p>
                          <h3 className="text-xl font-bold text-white">{track.title}</h3>
                        </div>
                        <button
                          onClick={() => setCleared((prev) => ({ ...prev, [track.id]: !done }))}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                            done
                              ? "bg-green-500/20 text-green-100 border-green-400/50"
                              : "bg-red-500/20 text-red-100 border-red-500/50"
                          }`}
                          aria-label={`Mark ${track.title} as ${done ? "uncleared" : "cleared"}`}
                        >
                          {done ? "Cleared" : "Mark cleared"}
                        </button>
                      </div>
                      <div className="mt-3 space-y-2 text-slate-200">
                        <div>
                          <p className="text-xs uppercase text-slate-400 font-mono">Core quests</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {track.quests.map((quest) => (
                              <span key={quest} className="text-xs bg-slate-900/60 border border-slate-700 text-slate-200 px-2.5 py-1 rounded">
                                {quest}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-red-200">
                          Boss fight: {track.boss}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-red-500/30 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Daily Missions</h2>
                <span className="text-xs text-red-300 font-mono">XP +10 each</span>
              </div>
              <div className="space-y-3">
                {dailyMissions.map((mission) => (
                  <div key={mission.title} className="border border-slate-700 rounded-xl p-4 bg-slate-800/60">
                    <p className="text-sm text-red-300 font-mono">{mission.title}</p>
                    <ul className="mt-2 space-y-2 text-slate-200 text-sm">
                      {mission.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-red-500/30 rounded-2xl p-6 shadow-2xl lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Sprint Loadouts</h2>
                <p className="text-slate-400 font-mono text-sm">Pick one and press start</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sprintTemplates.map((sprint) => (
                  <div key={sprint.title} className="border border-slate-700 rounded-xl p-4 bg-slate-800/60">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">{sprint.title}</h3>
                      <span className="text-xs font-mono text-red-300">{sprint.duration}</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-200 text-sm">
                      {sprint.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">▹</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-red-500/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Pattern Ladder</h3>
              <p className="text-slate-300 text-sm mb-3 font-mono">Clear in order until it feels automatic.</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                {["Sliding window", "Monotonic stack", "Prefix sums", "Binary search on answer", "Backtracking template", "Topological sort", "1D/2D DP"].map((item, idx) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-xs text-red-300 font-mono">{String(idx + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-slate-800/80 border border-slate-700 rounded-lg p-3">
                <p className="text-xs font-mono text-slate-400">Boss practice</p>
                <p className="text-slate-200 text-sm">Pick one old boss and solve from memory. No peeking for 20 minutes.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-red-200 font-mono">SHIP SOLUTIONS FAST</p>
                <h3 className="text-2xl font-bold text-white mt-1">Checklist before hitting submit</h3>
                <ul className="mt-3 space-y-2 text-slate-100 text-sm">
                  <li>▹ State the pattern + why it applies</li>
                  <li>▹ Time & space in plain language</li>
                  <li>▹ Edge cases: empty, single, extremes, duplicates</li>
                  <li>▹ Dry run with smallest failing example</li>
                </ul>
              </div>
              <Link
                href="https://github.com/amanimran786"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-700 font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Log solutions repo ↗
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

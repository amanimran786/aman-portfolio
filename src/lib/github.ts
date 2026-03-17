import { cache } from 'react';
import type { GithubRepo, GithubUser, PortfolioData, PortfolioProject } from '@/types/github';
import { PORTFOLIO_SITE_URL } from '@/lib/links';

const DEFAULT_GITHUB_USERNAME = 'amanimran786';
const GITHUB_API_BASE = 'https://api.github.com';
const REVALIDATE_SECONDS = 3600;
const ADDITIONAL_REPO_LIMIT = 6;
const FEATURED_REPO_NAMES = [
  'PatternQuest',
  'AI-Malware-Detection',
  'PhishingDetectorExtension',
  'FinGuard',
  'FoodBankInventorySystem',
];
const WORLDVIEW_REPO_KEYWORDS = ['worldview'];
const PORTFOLIO_REPO_NAMES = new Set(['aman-portfolio']);

const PROJECT_COLORS = [
  'from-blue-700 to-cyan-700',
  'from-green-600 to-emerald-600',
  'from-red-600 to-orange-600',
  'from-cyan-600 to-blue-600',
  'from-amber-600 to-yellow-600',
  'from-violet-700 to-fuchsia-700',
  'from-teal-700 to-emerald-700',
];

const LANGUAGE_ICONS: Record<string, string> = {
  TypeScript: '🟦',
  JavaScript: '🟨',
  Python: '🐍',
  Java: '☕',
  Swift: '📱',
  Kotlin: '🤖',
  'C++': '⚙️',
  HTML: '🌐',
  CSS: '🎨',
  Shell: '🖥️',
};

declare global {
  var __portfolioLastSuccess: PortfolioData | undefined;
}

function getUsername(): string {
  return process.env.GITHUB_USERNAME || DEFAULT_GITHUB_USERNAME;
}

function getGithubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function prettifyRepoName(repoName: string): string {
  return repoName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatRepoDescription(repo: GithubRepo): string {
  if (repo.description && repo.description.trim().length > 0) {
    return repo.description;
  }

  return `Production-ready repository for ${prettifyRepoName(repo.name)} with continuous iteration and active maintenance.`;
}

function uniqueTechnologies(repo: GithubRepo): string[] {
  const techSet = new Set<string>();
  if (repo.language) {
    techSet.add(repo.language);
  }
  for (const topic of repo.topics ?? []) {
    const cleaned = topic.replace(/[-_]+/g, ' ');
    techSet.add(cleaned);
  }
  return Array.from(techSet).slice(0, 6);
}

function pickIcon(repo: GithubRepo, featured: boolean): string {
  if (LANGUAGE_ICONS[repo.language ?? '']) {
    return LANGUAGE_ICONS[repo.language ?? ''];
  }

  if (featured) {
    return '🔥';
  }

  return '⚡';
}

function pickLatestWorldViewRepo(repos: GithubRepo[]): GithubRepo | null {
  const matches = repos
    .filter((repo) => {
      const name = repo.name.toLowerCase();
      return WORLDVIEW_REPO_KEYWORDS.some((keyword) => name.includes(keyword));
    })
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  return matches[0] ?? null;
}

function toPortfolioProject(repo: GithubRepo, featured: boolean, index: number): PortfolioProject {
  const isPortfolioRepo = PORTFOLIO_REPO_NAMES.has(repo.name.toLowerCase());

  return {
    id: repo.id,
    repoName: repo.name,
    title: prettifyRepoName(repo.name),
    description: formatRepoDescription(repo),
    icon: pickIcon(repo, featured),
    color: PROJECT_COLORS[index % PROJECT_COLORS.length],
    technologies: uniqueTechnologies(repo),
    githubUrl: repo.html_url,
    homepageUrl: isPortfolioRepo ? PORTFOLIO_SITE_URL : repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    featured,
  };
}

function buildFallbackData(username: string, message: string): PortfolioData {
  return {
    username,
    githubUrl: `https://github.com/${username}`,
    profile: {
      login: username,
      name: 'Aman Imran',
      bio: null,
      company: null,
      location: null,
      html_url: `https://github.com/${username}`,
      public_repos: 0,
      followers: 0,
      following: 0,
    },
    featuredProjects: [],
    otherProjects: [],
    isFallback: true,
    fallbackReason: message,
  };
}

export async function getGithubProfile(username = getUsername()): Promise<GithubUser> {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: getGithubHeaders(),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub profile request failed (${response.status})`);
  }

  return (await response.json()) as GithubUser;
}

export async function getGithubRepos(username = getUsername()): Promise<GithubRepo[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
    {
      headers: getGithubHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub repos request failed (${response.status})`);
  }

  return (await response.json()) as GithubRepo[];
}

export const getPortfolioData = cache(async (): Promise<PortfolioData> => {
  const username = getUsername();

  try {
    const [profile, repos] = await Promise.all([
      getGithubProfile(username),
      getGithubRepos(username),
    ]);

    const visibleRepos = repos.filter((repo) => !repo.fork && !repo.archived);
    const repoMap = new Map(visibleRepos.map((repo) => [repo.name.toLowerCase(), repo]));
    const latestWorldViewRepo = pickLatestWorldViewRepo(visibleRepos);

    const featuredProjects = [
      latestWorldViewRepo ? toPortfolioProject(latestWorldViewRepo, true, 0) : null,
      ...FEATURED_REPO_NAMES.map((repoName, index) => {
      const repo = repoMap.get(repoName.toLowerCase());
      if (!repo) {
        return null;
      }
      return toPortfolioProject(repo, true, index + 1);
    }),
    ].filter((repo): repo is PortfolioProject => repo !== null);

    const featuredNames = new Set(featuredProjects.map((repo) => repo.repoName.toLowerCase()));
    const otherProjects = visibleRepos
      .filter((repo) => !featuredNames.has(repo.name.toLowerCase()))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, ADDITIONAL_REPO_LIMIT)
      .map((repo, index) => toPortfolioProject(repo, false, featuredProjects.length + index));

    const data: PortfolioData = {
      username,
      githubUrl: profile.html_url,
      profile,
      featuredProjects,
      otherProjects,
      isFallback: false,
      fallbackReason: null,
    };

    globalThis.__portfolioLastSuccess = data;
    return data;
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown GitHub API error';
    console.warn(`[portfolio] Unable to load GitHub data for ${username}: ${reason}`);

    if (globalThis.__portfolioLastSuccess) {
      return {
        ...globalThis.__portfolioLastSuccess,
        isFallback: true,
        fallbackReason: 'Displaying last successful GitHub snapshot while API is unavailable.',
      };
    }

    return buildFallbackData(username, 'GitHub data is temporarily unavailable.');
  }
});

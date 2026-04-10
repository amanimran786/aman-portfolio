export interface GithubUser {
  login: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics: string[];
}

export interface PortfolioProject {
  id: number;
  repoName: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  technologies: string[];
  githubUrl: string;
  homepageUrl: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  featured: boolean;
  metadata?: {
    displayName: string;
    shortDescription: string;
    category: string;
    keyFeatures: string[];
    impact: string;
  };
}

export interface PortfolioData {
  username: string;
  githubUrl: string;
  profile: GithubUser;
  featuredProjects: PortfolioProject[];
  otherProjects: PortfolioProject[];
  isFallback: boolean;
  fallbackReason: string | null;
}

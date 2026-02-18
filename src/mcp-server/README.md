/**
 * Portfolio MCP Server
 * 
 * This is an optional backend server that can be used to:
 * - Manage dynamic project data
 * - Handle contact form submissions
 * - Provide blog functionality
 * - Analytics and tracking
 * 
 * To use this server:
 * 1. Install: npm install @modelcontextprotocol/sdk
 * 2. Run: node src/mcp-server/index.js
 * 3. Configure in your Next.js API routes
 */

// Example MCP Server resources and tools
export const portfolioResources = {
  projects: {
    resource: "portfolio://projects",
    description: "Get all portfolio projects",
    getAllProjects: () => [
      {
        id: 1,
        title: "Portfolio Website",
        description: "Modern portfolio built with Next.js",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        url: "https://github.com",
      },
      {
        id: 2,
        title: "NeetCode Solutions",
        description: "LeetCode solutions with explanations",
        technologies: ["Python", "JavaScript"],
        url: "https://github.com",
      },
    ],
  },

  skills: {
    resource: "portfolio://skills",
    description: "Get all portfolio skills",
    getAllSkills: () => [
      {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "Python", "Django"],
      },
    ],
  },

  contact: {
    resource: "portfolio://contact",
    description: "Handle contact form submissions",
    submitForm: (data) => ({
      success: true,
      message: "Form submitted successfully",
      data,
    }),
  },
};

// Example tools
export const portfolioTools = [
  {
    name: "get_projects",
    description: "Retrieve all projects from portfolio",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_skills",
    description: "Retrieve all skills from portfolio",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "submit_contact_form",
    description: "Submit a contact form",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        message: { type: "string" },
      },
      required: ["name", "email", "message"],
    },
  },
];

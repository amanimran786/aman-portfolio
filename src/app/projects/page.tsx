export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features SEO optimization, dark mode support, and smooth animations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "NeetCode Solutions",
      description: "Collection of optimized LeetCode solutions with detailed explanations, time/space complexity analysis, and multiple approaches for solving algorithmic problems.",
      technologies: ["Python", "JavaScript", "Data Structures", "Algorithms"],
      github: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "System Design Guide",
      description: "Comprehensive study guide covering fundamental system design concepts including scalability, databases, caching, and microservices architecture.",
      technologies: ["System Design", "Architecture", "Best Practices"],
      github: "https://github.com",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, user authentication, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Interactive weather application with real-time data, location-based forecasts, and historical weather trends.",
      technologies: ["React", "API Integration", "Chart.js"],
      github: "https://github.com",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore the projects I've worked on and the technologies I've used
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      GitHub →
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* All Projects */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Other Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Have an interesting project in mind?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Let's collaborate and bring your ideas to life
          </p>
          <a
            href="mailto:aman.imran@sjsu.edu"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

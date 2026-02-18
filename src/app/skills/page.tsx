export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "JavaScript",
        "Redux",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "RESTful APIs",
        "GraphQL",
        "JWT Authentication",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "SQL"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Netlify",
        "CI/CD",
        "Linux",
      ],
    },
    {
      category: "Data Structures & Algorithms",
      skills: [
        "Arrays & Hashing",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Dynamic Programming",
        "Sorting & Searching",
        "Binary Search",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Project Management",
        "Debugging",
        "Code Review",
        "Documentation",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Skills
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Technical expertise and professional capabilities
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Proficiency Levels
          </h2>

          <div className="space-y-8">
            {/* Expert Level */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Expert
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Deep knowledge with years of production experience
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Advanced Level */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Advanced
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Strong knowledge with practical application experience
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "MongoDB",
                  "Express",
                  "Git",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Intermediate Level */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Intermediate
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Solid understanding with growing experience
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "GraphQL",
                  "AWS",
                  "PostgreSQL",
                  "Redux",
                  "Django",
                  "CI/CD",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Certifications & Learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              NeetCode 150
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Comprehensive guide to 150 essential LeetCode problems covering all major algorithmic topics.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Status: In Progress
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              System Design Basics
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Studying fundamental system design concepts including scalability, databases, and architecture patterns.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Status: In Progress
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let's build something amazing together
          </p>
          <a
            href="mailto:aman.imran@sjsu.edu"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

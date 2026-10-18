import Container from './Container.jsx'

// TODO: Replace this project data with Sanchit's final project details and URLs.
const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern responsive personal developer portfolio designed to showcase skills, projects, experience, and provide an easy way for visitors to get in touch.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Task Management Application',
    description:
      'A responsive task management application concept focused on organizing tasks, tracking progress, and providing a clean user experience.',
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Student Management System',
    description:
      'A software application concept for managing student information, including student records and basic management operations.',
    technologies: ['Java', 'OOP', 'Collections', 'File Handling'],
    github: '#',
    liveDemo: '#',
  },
]

function ProjectLink({ label, href }) {
  if (href !== '#') {
    return (
      <a
        className="text-sm text-accent transition-colors hover:text-accent-hover"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    )
  }

  return (
    <span
      aria-disabled="true"
      aria-label={`${label} link not available`}
      className="inline-flex items-center text-sm text-muted"
    >
      {label}
    </span>
  )
}

function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="scroll-mt-24 border-t border-border/70 py-section"
      id="projects"
    >
      <Container>
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
            PROJECTS
          </p>
          <h2 className="mb-5" id="projects-title">
            Things I&apos;ve been building
          </h2>
          <p className="text-base leading-7 sm:text-lg">
            Selected projects focused on building useful, responsive, and
            well-structured software.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(
            ({ title, description, technologies, github, liveDemo }, index) => (
              <article
                aria-labelledby={`project-title-${index + 1}`}
                className={`group flex h-full flex-col rounded-card border p-5 transition-[transform,border-color,background-color] duration-200 motion-reduce:transition-none sm:p-6 ${
                  index === 0
                    ? 'border-border-strong bg-surface'
                    : 'border-border bg-surface/60'
                } motion-safe:hover:-translate-y-1 hover:border-border-strong hover:bg-surface`}
                key={title}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="mb-3 text-xl leading-snug"
                  id={`project-title-${index + 1}`}
                >
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-secondary">
                  {description}
                </p>

                <ul
                  aria-label={`${title} technologies`}
                  className="mb-7 flex flex-wrap gap-2"
                >
                  {technologies.map((technology) => (
                    <li
                      className="rounded-control border border-border px-2.5 py-1 text-xs text-secondary"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-4">
                  <ProjectLink href={github} label="GitHub" />
                  <ProjectLink href={liveDemo} label="Live Demo" />
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  )
}

export default Projects

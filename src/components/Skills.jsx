import Container from './Container.jsx'

const skillGroups = [
  {
    name: 'Programming',
    skills: ['Java', 'C'],
  },
  {
    name: 'Frontend',
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-t border-border/70 py-section"
      id="skills"
    >
      <Container>
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
            SKILLS
          </p>
          <h2 className="mb-5" id="skills-title">
            Technologies I work with
          </h2>
          <p className="text-base leading-7 sm:text-lg">
            A growing set of programming languages, frontend technologies, and
            tools I use to build and refine digital experiences.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map(({ name, skills }) => (
            <section
              aria-labelledby={`skills-${name.toLowerCase()}`}
              className="rounded-card border border-border bg-surface/60 p-5 transition-colors motion-reduce:transition-none hover:border-border-strong sm:p-6"
              key={name}
            >
              <h3
                className="mb-4 text-base font-medium tracking-normal text-primary"
                id={`skills-${name.toLowerCase()}`}
              >
                {name}
              </h3>
              <ul className="divide-y divide-border">
                {skills.map((skill) => (
                  <li
                    className="py-3 text-sm text-secondary first:pt-0 last:pb-0 sm:text-base"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills

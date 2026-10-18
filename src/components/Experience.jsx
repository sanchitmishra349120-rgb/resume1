import Container from './Container.jsx'

// TODO: Replace this temporary entry with Sanchit's real education details.
const education = [
  {
    degree: 'YOUR DEGREE',
    institution: 'YOUR INSTITUTION',
    period: 'YOUR PERIOD',
    description: 'YOUR DESCRIPTION',
  },
]

// TODO: Replace the experience placeholder copy with real professional details.
function Experience() {
  return (
    <section
      aria-label="Experience and education"
      className="border-t border-border/70"
    >
      <section
        aria-labelledby="experience-title"
        className="scroll-mt-24 py-section"
        id="experience"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <header>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
                EXPERIENCE
              </p>
              <h2 id="experience-title">Professional experience</h2>
            </header>

            <div className="border-l border-border-strong pl-6 sm:pl-8">
              <p className="text-lg font-medium text-primary">
                Professional experience will be added here.
              </p>
              <p className="mt-3 max-w-2xl leading-7">
                Currently focused on building projects, strengthening
                development skills, and growing through practical software
                development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="education-title"
        className="scroll-mt-24 border-t border-border/70 py-section"
        id="education"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <header>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
                EDUCATION
              </p>
              <h2 id="education-title">Education</h2>
            </header>

            <ol
              aria-label="Education entries (temporary placeholders)"
              className="border-l border-border-strong"
            >
              {education.map(
                ({ degree, institution, period, description }, index) => (
                  <li
                    className="relative pl-6 sm:pl-8"
                    key={`${degree}-${index}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[0.3125rem] top-2 size-2.5 rounded-full border border-accent bg-background"
                    />
                    <article className="rounded-card border border-border bg-surface/60 p-5 transition-colors hover:border-border-strong sm:p-6 motion-reduce:transition-none">
                      <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                        Temporary placeholder — replace with real details
                      </p>
                      <h3 className="text-lg sm:text-xl">{degree}</h3>
                      <p className="mt-2 text-sm text-secondary">
                        {institution}
                      </p>
                      <p className="mt-1 text-sm text-muted">{period}</p>
                      <p className="mt-4 text-sm leading-6">{description}</p>
                    </article>
                  </li>
                ),
              )}
            </ol>
          </div>
        </Container>
      </section>
    </section>
  )
}

export default Experience

import Container from './Container.jsx'

const focusAreas = [
  'Clean & maintainable code',
  'Responsive web experiences',
  'Continuous learning',
]

function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-border/70 py-section"
      id="about"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)] lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
              ABOUT
            </p>
            <h2 className="mb-8" id="about-title">
              A little about me
            </h2>

            <div className="max-w-2xl space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
              <p>
                I’m Sanchit Mishra, a Software Developer focused on building
                modern, responsive, and user-friendly digital experiences.
              </p>
              <p>
                I enjoy turning ideas into practical software, learning new
                technologies, and sharpening my problem-solving skills through
                real projects.
              </p>
              <p>
                I’m especially interested in writing clean, maintainable code
                and continuing to grow as a developer.
              </p>
            </div>
          </div>

          <aside
            aria-label="About Sanchit Mishra"
            className="flex flex-col gap-10 lg:pt-3"
          >
            <div>
              <h3 className="mb-5 text-lg">What I focus on</h3>
              <ul className="divide-y divide-border border-y border-border">
                {focusAreas.map((focus, index) => (
                  <li
                    className="flex items-center gap-4 py-4 text-sm text-secondary sm:text-base"
                    key={focus}
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-muted"
                    >
                      0{index + 1}
                    </span>
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface p-5 sm:p-6">
              <h3 className="mb-5 text-lg">Quick facts</h3>
              <dl className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <dt className="text-sm text-muted">Name</dt>
                  <dd className="text-sm font-medium text-primary">
                    Sanchit Mishra
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-border pt-4">
                  <dt className="text-sm text-muted">Role</dt>
                  <dd className="text-sm font-medium text-primary">
                    Software Developer
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default About

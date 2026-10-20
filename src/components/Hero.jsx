import Container from './Container.jsx'

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden py-16 sm:py-20 lg:py-24"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] -z-10 aspect-square w-[min(92vw,68rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50"
      >
        <div className="absolute inset-[10%] rounded-full border border-border/40" />
        <div className="absolute inset-[22%] rounded-full border border-border/30" />
        <div className="absolute inset-[30%] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <Container className="flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-12 py-12 sm:gap-16 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12 lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-6">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
                Software Developer
              </span>
            </p>

            <h1
              className="max-w-4xl text-display font-semibold text-primary"
              id="hero-title"
            >
              Sanchit Mishra
            </h1>

            <p className="mt-6 max-w-2xl text-lead text-secondary sm:mt-8">
              I build thoughtful digital experiences with a focus on clear,
              reliable software.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                className="button button-primary w-full sm:w-auto"
                href="#projects"
              >
                View Projects
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </a>
              <a
                className="button button-secondary w-full sm:w-auto"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            <ul
              aria-label="Social and contact links"
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <li>
                <a
                  className="rounded-sm text-sm text-muted no-underline transition-colors hover:text-primary hover:no-underline"
                  href="https://github.com/sanchitmishra349120-rgb"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="rounded-sm text-sm text-muted no-underline transition-colors hover:text-primary hover:no-underline"
                  href="https://www.linkedin.com/in/sanchit-mishra-2a77a3314/?isSelfProfile=true"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="rounded-sm text-sm text-muted no-underline transition-colors hover:text-primary hover:no-underline"
                  href="mailto:sanchitmishra121@gmail.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[21rem] lg:max-w-[24rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-border/50"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-accent/5 blur-3xl"
            />
            <img
              alt="Sanchit Mishra - Software Developer"
              className="relative aspect-[4/5] w-full rounded-3xl border border-border-strong object-cover object-center shadow-[0_24px_80px_rgb(0,0,0,0.35)]"
              src="/profile-photo.png"
            />
          </div>
        </div>

        <a
          aria-label="Scroll to the About section"
          className="group mb-2 inline-flex w-fit items-center gap-3 self-center rounded-sm text-xs text-muted no-underline hover:text-secondary hover:no-underline sm:self-start"
          href="#about"
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-border text-secondary transition-colors motion-reduce:transition-none group-hover:border-border-strong group-hover:text-primary">
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </span>
          <span>Scroll to explore</span>
        </a>
      </Container>
    </section>
  )
}

export default Hero

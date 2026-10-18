import Container from './Container.jsx'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-border/70 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Sanchit Mishra</p>
            <p className="mt-1 text-sm text-muted">Software Developer</p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a
                  className="rounded-sm text-sm text-secondary transition-colors hover:text-primary"
                  href="https://github.com/sanchitmishra349120-rgb"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="rounded-sm text-sm text-secondary transition-colors hover:text-primary"
                  href="https://www.linkedin.com/in/sanchit-mishra-2a77a3314/?isSelfProfile=true"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="rounded-sm text-sm text-secondary transition-colors hover:text-primary"
                  href="mailto:sanchitmishra121@gmail.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>

          <a
            className="w-fit rounded-sm text-sm text-secondary transition-colors hover:text-primary"
            href="#home"
          >
            Back to top
          </a>
        </div>

        <p className="mt-7 border-t border-border pt-5 text-xs text-muted">
          © {currentYear} Sanchit Mishra. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer

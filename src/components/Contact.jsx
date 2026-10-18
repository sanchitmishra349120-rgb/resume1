import { useRef, useState } from 'react'
import Container from './Container.jsx'

function Contact() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const form = formRef.current

    if (!form) {
      return
    }

    const name = form.elements.namedItem('name')
    const email = form.elements.namedItem('email')
    const message = form.elements.namedItem('message')
    const nextErrors = {}

    if (!name.value.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!email.value.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (email.validity.typeMismatch) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!message.value.trim()) {
      nextErrors.message = 'Please enter a message.'
    }

    setErrors(nextErrors)
    setStatusMessage('')
    setSubmissionStatus('idle')

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = form.elements.namedItem(
        Object.keys(nextErrors)[0],
      )
      window.requestAnimationFrame(() => firstInvalidField?.focus())
      return
    }

    if (!formspreeEndpoint) {
      setSubmissionStatus('error')
      setStatusMessage(
        'The contact form is not configured yet. Please email me directly.',
      )
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      })

      if (!response.ok) {
        setSubmissionStatus('error')
        setStatusMessage(
          'Your message could not be sent. Please try again or email me directly.',
        )
        return
      }

      form.reset()
      setErrors({})
      setSubmissionStatus('success')
      setStatusMessage('Thanks for reaching out. Your message has been sent.')
    } catch {
      setSubmissionStatus('error')
      setStatusMessage(
        'A network error prevented your message from being sent. Please try again or email me directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleFieldChange(event) {
    const { name } = event.target

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
    setStatusMessage('')
    setSubmissionStatus('idle')
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-border/70 py-section"
      id="contact"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
              CONTACT
            </p>
            <h2 className="mb-5" id="contact-title">
              Let&apos;s work together
            </h2>
            <p className="max-w-xl leading-7">
              Have a question or want to discuss an opportunity? Send a note
              using the form or reach out through one of the links below.
            </p>

            <address className="mt-8 space-y-4 not-italic">
              <a
                className="block w-fit rounded-sm text-base text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent-hover"
                href="mailto:sanchitmishra121@gmail.com"
              >
                sanchitmishra121@gmail.com
              </a>
              <ul aria-label="Social profiles" className="flex gap-6">
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
              </ul>
            </address>
          </div>

          <form
            className="surface space-y-5 p-5 sm:p-7"
            noValidate
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <p className="text-sm leading-6 text-muted">
              {formspreeEndpoint
                ? 'Your message will be securely processed by Formspree.'
                : 'Contact form setup is pending. You can email me directly using the address provided.'}
            </p>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-primary"
                htmlFor="contact-name"
              >
                Name
              </label>
              <input
                autoComplete="name"
                className="w-full rounded-control border border-border-strong bg-background/70 px-4 py-3 text-primary placeholder:text-muted focus:border-accent"
                id="contact-name"
                maxLength={100}
                name="name"
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                aria-invalid={Boolean(errors.name)}
                onChange={handleFieldChange}
                required
                type="text"
              />
              {errors.name && (
                <p
                  className="mt-2 text-sm text-accent"
                  id="contact-name-error"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-primary"
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                autoComplete="email"
                className="w-full rounded-control border border-border-strong bg-background/70 px-4 py-3 text-primary placeholder:text-muted focus:border-accent"
                id="contact-email"
                maxLength={254}
                name="email"
                aria-describedby={
                  errors.email ? 'contact-email-error' : undefined
                }
                aria-invalid={Boolean(errors.email)}
                onChange={handleFieldChange}
                required
                type="email"
              />
              {errors.email && (
                <p
                  className="mt-2 text-sm text-accent"
                  id="contact-email-error"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-primary"
                htmlFor="contact-message"
              >
                Message
              </label>
              <textarea
                className="w-full resize-y rounded-control border border-border-strong bg-background/70 px-4 py-3 text-primary placeholder:text-muted focus:border-accent"
                id="contact-message"
                maxLength={5000}
                name="message"
                aria-describedby={
                  errors.message ? 'contact-message-error' : undefined
                }
                aria-invalid={Boolean(errors.message)}
                onChange={handleFieldChange}
                required
                rows={5}
              />
              {errors.message && (
                <p
                  className="mt-2 text-sm text-accent"
                  id="contact-message-error"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              className="button button-primary w-full sm:w-auto"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Sending…' : 'Submit'}
            </button>

            <p
              aria-live="polite"
              className={`text-sm ${
                submissionStatus === 'error' ? 'text-accent' : 'text-secondary'
              }`}
              role="status"
            >
              {statusMessage}
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact

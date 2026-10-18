function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-page-gutter ${className}`}
    >
      {children}
    </div>
  )
}

export default Container

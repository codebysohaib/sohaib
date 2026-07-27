export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-glow">
        <p className="section-eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Let&apos;s work together
        </p>
        <h2 className="contact-title">
          Got a project<br />in mind?
        </h2>
        <p className="contact-sub">
          I&apos;m available for freelance work and full-time opportunities. Whether it&apos;s a web project or a native Android app — let&apos;s talk.
        </p>
        <br />
        <a href="mailto:codebysohaib@gmail.com" className="contact-email">
          codebysohaib@gmail.com
        </a>
        <div className="social-links">
          <a
            href="https://github.com/codebysohaib"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            ⟶ GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadsohaibasif/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            ⟶ LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>
      <div className="blog-hero-inner reveal">
        <p className="hero-eyebrow">Blog</p>
        <h1 className="section-title">
          Thoughts, projects, tutorials,<br />and things I&apos;m building.
        </h1>
        <p className="section-sub">
          Writing about software development, CLI engineering, mobile apps, design systems, and lessons learned along the way.
        </p>
      </div>
    </section>
  );
}

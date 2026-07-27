import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientRevealInitializer from '@/components/ClientRevealInitializer';
import ArticleHeader from '@/components/ArticleHeader';
import CodeBlock from '@/components/CodeBlock';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import { blogPosts } from '@/lib/blog';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | CodeBySohaib',
    };
  }

  return {
    title: `${post.title} | CodeBySohaib`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const isCBS = post.slug === 'introducing-cbs-devtools';

  const cbsKeyFeatures = [
    {
      title: '🌐 Network & Geolocation Tools',
      desc: 'Public IP lookup with ISP/geo details, local network interface inspector, DNS record resolution, cross-platform ping, TCP port reachability tester, HTTP header inspector, and traceroute diagnostic.',
    },
    {
      title: '🛠 Developer Utilities & Local JWT',
      desc: 'JSON formatter & minifier with stdin pipe support, Base64 encoder/decoder, text & file hashing (MD5, SHA256, SHA512), UUID v4/v7 generators, regex tester, 100% local-only JWT decoder, and JSON to TypeScript generator.',
    },
    {
      title: '⚡ Cryptographic Generators',
      desc: 'Secure random password generator, developer username generator, URL slug generator, Lorem Ipsum text generator, fake dev data, color & CSS gradient generator, terminal QR codes, and secret tokens.',
    },
    {
      title: '📁 File & Archival Utilities',
      desc: 'Metadata inspector, Zip compression & extraction, pattern-based batch file renamer with --dry-run preview, file type auto-organizer, recursive file finder, and duplicate file detector.',
    },
    {
      title: '🖼 Image Optimization',
      desc: 'Image metadata inspector, image resizer, format converter (PNG, JPG, BMP), quality compressor, and multi-resolution favicon set generator (16x16 to 128x128).',
    },
    {
      title: '💻 Real-Time System Metrics',
      desc: 'System dashboard, CPU specs & load average, RAM meter with visual progress bar, disk partition usage, top resource processes, environment variable inspector with sensitive key masking, and uptime.',
    },
    {
      title: '🌍 Web Inspection Tools',
      desc: 'Metadata & OpenGraph tag extractor, robots.txt fetcher, sitemap.xml parser, HTML snapshot generator, HTTP status & latency tester, redirect chain tracer, and remote favicon finder.',
    },
    {
      title: '🔒 Security-First Architecture',
      desc: 'Powered by Node.js crypto.randomBytes, local-only offline operations, sensitive key masking, and dry-run safety modes for file operations.',
    },
  ];

  const directCommands = [
    { cmd: 'cbs ip', desc: 'Fetch public IP, country, and ISP info' },
    { cmd: 'cbs local-ip', desc: 'List local network interfaces & IP addresses' },
    { cmd: 'cbs dns google.com', desc: 'Lookup DNS records (A, AAAA, MX, TXT)' },
    { cmd: 'cbs ping google.com', desc: 'Cross-platform ICMP latency ping' },
    { cmd: 'cbs uuid', desc: 'Generate a cryptographically secure v4/v7 UUID' },
    { cmd: 'cbs password', desc: 'Generate a strong, secure random password' },
    { cmd: 'cbs qr "https://example.com"', desc: 'Generate an interactive terminal QR code' },
    { cmd: 'cbs system', desc: 'Display OS, CPU, RAM visual meter, and env stats' },
  ];

  const techStack = [
    { name: 'Node.js', role: 'Runtime environment' },
    { name: 'TypeScript', role: 'Type-safe codebase' },
    { name: 'Commander.js', role: 'CLI command routing' },
    { name: '@clack/prompts', role: 'Interactive terminal UI' },
    { name: 'Chalk', role: 'Terminal styling & colors' },
    { name: 'Ora', role: 'Terminal spinners' },
    { name: 'Zod', role: 'Schema validation' },
  ];

  const cbsRoadmap = [
    'Expanded string & text transformation utilities',
    'Enhanced cross-platform terminal compatibility',
    'Advanced file archival and multi-format compression',
    'Rich interactive terminal UI prompt controls',
    'Comprehensive documentation & API guides',
    'Automated unit & integration test suites',
    'Open-source community contribution workflows',
  ];

  return (
    <>
      <ClientRevealInitializer />
      <Navbar />
      <main className="article-page-container">
        <article className="article-container">
          <ArticleHeader post={post} />

          <div className="article-body">
            {isCBS ? (
              <>
                {/* STORY & INTRODUCTION */}
                <div className="article-section">
                  <p className="article-lead">
                    As developers, we perform dozens of repetitive micro-tasks every day: inspecting public IP addresses, formatting JSON payloads, decoding JWT tokens, generating secure passwords or UUIDs, resizing images, and checking system resources.
                  </p>
                  <p>
                    For the longest time, my workflow involved jumping between random web tools, online converters, bookmarked sites, or single-purpose npm packages. I wanted a faster, more secure solution: a single, local-first terminal toolkit accessible anytime with a simple 3-letter command.
                  </p>
                  <p>
                    That desire led me to build <strong>CBS DevTools (<code>cbs-devtools</code>)</strong> — an open-source, all-in-one developer utility CLI built with Node.js and TypeScript.
                  </p>
                </div>

                {/* THE CORE MOTIVATION */}
                <div className="article-section">
                  <h2>Why I Built CBS DevTools</h2>
                  <p>
                    Whenever I was debugging an API or configuring a server, I needed quick answers without leaving my terminal. Opening web tools not only breaks developer flow, but pasting sensitive payload data or environment variables into third-party web converters poses real security risks.
                  </p>
                  <p>
                    CBS DevTools was engineered around three core principles:
                  </p>
                  <ul className="readme-feature-list" style={{ marginBottom: '1.5rem' }}>
                    <li><strong>⚡ Speed &amp; Convenience</strong>: Run instant commands directly in your terminal without context switching.</li>
                    <li><strong>🔒 Security &amp; Privacy</strong>: 100% local execution — cryptographically secure random generation and offline JWT parsing without sending data anywhere.</li>
                    <li><strong>🎨 Intuitive DX</strong>: Both interactive arrow-key terminal prompts for discovery AND direct subcommands for power users.</li>
                  </ul>
                </div>

                {/* INTERACTIVE TERMINAL EXPERIENCE */}
                <div className="article-section">
                  <h2>Designing the Interactive Terminal DX</h2>
                  <p>
                    One of my main design goals was to ensure you don&apos;t need to memorize dozens of CLI arguments to use the tool. If you launch CBS DevTools simply with:
                  </p>
                  <CodeBlock code="cbs" language="bash" />
                  <p>
                    It opens an interactive terminal interface powered by <code>@clack/prompts</code>. You can navigate between utility categories using your keyboard arrow keys and follow step-by-step prompts:
                  </p>

                  <InteractiveTerminal />

                  <p style={{ marginTop: '1.5rem' }}>
                    For experienced CLI users or automation scripts, every utility can also be triggered directly as a single subcommand.
                  </p>
                </div>

                {/* FEATURE DEEP DIVE */}
                <div className="article-section">
                  <h2>Comprehensive Feature Toolkit</h2>
                  <p>
                    CBS DevTools brings together 7 major categories of developer utilities inside one unified package:
                  </p>
                  <div className="article-feature-grid">
                    {cbsKeyFeatures.map((feat) => (
                      <div key={feat.title} className="skill-card visible" style={{ opacity: 1, transform: 'none' }}>
                        <div className="skill-name" style={{ fontSize: '1.05rem', color: 'var(--cyan)' }}>
                          {feat.title}
                        </div>
                        <div className="skill-desc" style={{ marginBottom: 0 }}>
                          {feat.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIRECT COMMAND EXAMPLES */}
                <div className="article-section">
                  <h2>Direct Subcommands &amp; Examples</h2>
                  <p>
                    Here are some of the direct subcommands you can run instantly in your terminal:
                  </p>
                  <div className="direct-commands-list">
                    {directCommands.map((item) => (
                      <div key={item.cmd} className="direct-command-item">
                        <CodeBlock code={item.cmd} language="bash" />
                        <span className="command-desc">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UNDER THE HOOD: TECH STACK */}
                <div className="article-section">
                  <h2>Under the Hood: Tech Stack</h2>
                  <p>
                    Building a reliable cross-platform CLI requires choosing tools that ensure type safety, clean input handling, and crisp output rendering:
                  </p>
                  <div className="tech-stack-grid">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="tag tech-chip">
                        <strong style={{ color: 'var(--white)' }}>{tech.name}</strong>
                        <span style={{ opacity: 0.7, marginLeft: '0.4rem' }}>— {tech.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INSTALLATION & QUICKSTART */}
                <div className="article-section">
                  <h2>Installation &amp; Quickstart</h2>
                  <p>
                    You can install CBS DevTools globally via npm:
                  </p>
                  <CodeBlock code="npm install -g cbs-devtools" language="bash" />
                  <p>
                    Then launch the CLI anytime:
                  </p>
                  <CodeBlock code="cbs" language="bash" />
                  <p>
                    Or run commands on-demand without installing using npx:
                  </p>
                  <CodeBlock code="npx cbs-devtools" language="bash" />
                </div>

                {/* LESSONS LEARNED */}
                <div className="article-section">
                  <h2>Engineering Reflections &amp; Lessons Learned</h2>
                  <p>
                    Building CBS DevTools gave me a fantastic opportunity to explore developer experience (DX) from the command-line perspective.
                  </p>
                  <p>
                    While most of my work focuses on full-stack web and mobile applications, engineering a CLI required thinking deeply about command taxonomy, terminal color palettes, spinner feedback during asynchronous tasks, robust error handling, and cross-platform terminal compatibility across Windows PowerShell, macOS zsh, and Linux bash.
                  </p>
                  <p>
                    It reinforced the principle that small everyday utilities become exponentially more valuable when organized inside a cohesive, well-designed developer experience.
                  </p>
                </div>

                {/* ROADMAP */}
                <div className="article-section">
                  <h2>What&apos;s Next</h2>
                  <p>Here is what I&apos;m planning for upcoming releases:</p>
                  <ul className="article-roadmap-list">
                    {cbsRoadmap.map((item) => (
                      <li key={item}>
                        <span className="roadmap-icon">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CALL TO ACTION CARD */}
                <div className="article-cta-section">
                  <h3 className="contact-title" style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
                    Want to try CBS DevTools?
                  </h3>
                  <p className="contact-sub" style={{ marginBottom: '1.8rem' }}>
                    Explore the open source repository on GitHub or install the package directly from npm.
                  </p>
                  <div className="article-cta-btns">
                    <a
                      href="https://github.com/codebysohaib/cbs-devtools"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i> View on GitHub
                    </a>
                    <a
                      href="https://www.npmjs.com/package/cbs-devtools"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <i className="fab fa-npm" style={{ marginRight: '0.5rem' }}></i> Install from npm
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="article-section">
                  <p className="article-lead">{post.description}</p>
                </div>
                <div className="article-cta-section">
                  <h3 className="contact-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    Have questions or feedback?
                  </h3>
                  <div className="article-cta-btns">
                    <Link href="/#contact" className="btn-primary">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

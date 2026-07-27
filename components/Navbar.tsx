import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <span>//</span> codebysohaib
      </Link>
      <ul className="nav-links">
        <li><Link href="/#skills">Skills</Link></li>
        <li><Link href="/#projects">Work</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      <Link href="/#contact" className="nav-cta">Let&apos;s talk</Link>
    </nav>
  );
}

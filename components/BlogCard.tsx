import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="blog-card project-card">
      <div className={`project-visual ${post.visualClass}`}>
        <div className="project-mockup">
          <i className={post.coverIcon}></i>
        </div>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-type">{post.category}</span>
          <span className="project-year">{post.date}</span>
        </div>
        <div className="project-name">{post.title}</div>
        <div className="project-desc">{post.description}</div>
        <div className="blog-card-meta">
          <span className="read-time">{post.readTime}</span>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Link href={`/blog/${post.slug}`} className="btn-ghost" style={{ display: 'inline-block' }}>
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
}

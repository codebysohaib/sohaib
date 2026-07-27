import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <div className="featured-post-card reveal">
      <div className={`featured-visual ${post.visualClass}`}>
        <div className="project-mockup featured-mockup">
          <i className={post.coverIcon}></i>
        </div>
      </div>
      <div className="featured-body">
        <div className="featured-meta">
          <span className="project-type">{post.category}</span>
          <span className="post-dot">•</span>
          <span className="post-date">{post.date}</span>
          <span className="post-dot">•</span>
          <span className="post-readtime">{post.readTime}</span>
        </div>
        <h2 className="featured-title">{post.title}</h2>
        <p className="featured-desc">{post.description}</p>
        <div className="featured-footer">
          <Link href={`/blog/${post.slug}`} className="btn-primary">
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
}

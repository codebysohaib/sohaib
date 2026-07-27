import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <div className="article-header reveal">
      <Link href="/blog" className="article-back-link">
        ← Back to Blog
      </Link>
      <div className="article-meta">
        <span className="project-type">{post.category}</span>
        <span className="post-dot">•</span>
        <span className="post-date">{post.date}</span>
        <span className="post-dot">•</span>
        <span className="post-readtime">{post.readTime}</span>
      </div>
      <h1 className="article-title">{post.title}</h1>
      <div className="article-author-box">
        <div className="author-avatar">
          <span>{post.author.slice(0, 1)}</span>
        </div>
        <div className="author-info">
          <div className="author-name">{post.author}</div>
          <div className="author-role">Web &amp; Android Developer</div>
        </div>
      </div>
    </div>
  );
}

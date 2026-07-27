'use client';

import { useState } from 'react';
import { blogPosts, BlogCategory } from '@/lib/blog';
import BlogHero from '@/components/BlogHero';
import FeaturedPost from '@/components/FeaturedPost';
import CategoryFilter from '@/components/CategoryFilter';
import BlogCard from '@/components/BlogCard';

export default function BlogClientPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p !== featuredPost);

  const showFeatured =
    activeCategory === 'All' || (featuredPost && featuredPost.category === activeCategory);

  const filteredRegularPosts = regularPosts.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const hasMultiplePosts = blogPosts.length > 1;

  return (
    <>
      <BlogHero />
      <section className="blog-section">
        {showFeatured && featuredPost && <FeaturedPost post={featuredPost} />}

        {hasMultiplePosts && (
          <>
            <div className="blog-grid-header" style={{ marginTop: showFeatured ? '3rem' : '1rem' }}>
              <div>
                <p className="section-eyebrow">Articles &amp; Topics</p>
                <h2 className="section-title">Filter Content</h2>
              </div>
              <CategoryFilter
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>

            {filteredRegularPosts.length > 0 ? (
              <div className="blog-grid">
                {filteredRegularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : !showFeatured ? (
              <div className="empty-category-msg">
                <p className="t-comment">
                  // No articles found for category &quot;{activeCategory}&quot; yet. More posts coming soon!
                </p>
              </div>
            ) : null}
          </>
        )}
      </section>
    </>
  );
}

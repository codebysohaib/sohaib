'use client';

import { blogCategories, BlogCategory } from '@/lib/blog';

interface CategoryFilterProps {
  activeCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
}

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="category-filter-container">
      {blogCategories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            className={`category-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

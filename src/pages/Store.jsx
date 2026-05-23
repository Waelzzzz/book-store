import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CategoryFilter from '../components/CategoryFilter';
import BookCard from '../components/BookCard';
import { books, CATEGORIES } from '../data/books';

/**
 * Store (Books) page — mirrors books.html.
 * Category filter is fully interactive: selecting a chip filters the grid.
 */
export default function Store() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleBooks =
    activeCategory === 'All'
      ? books
      : books.filter((b) => b.category === activeCategory);

  return (
    <>
      <PageBanner
        title="Browse All Books"
        subtitle="Filter by genre and find your next favourite read."
        breadcrumbLabel="Books"
      />

      <section className="books-section">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="books-grid">
          {visibleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}

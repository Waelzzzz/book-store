import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import FeaturesSection from '../components/FeaturesSection';
import { featuredBooks, CATEGORIES } from '../data/books';

/**
 * Home page — composed from smaller, reusable components.
 * Mirrors index.html: Hero → Category chips → Featured Books → Features.
 */
export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Decorative category chips — purely visual on the home page */}
      <section className="categories" aria-label="Browse by category">
        <div className="cat-list">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`cat-chip${cat === 'All' ? ' active' : ''}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured books grid */}
      <section className="books-section">
        <SectionHeading
          title="Featured Books"
          subtitle="Staff picks and current bestsellers — chosen just for you."
        />

        <div className="books-grid">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '42px' }}>
          <Link to="/books" className="btn btn-dark">
            View All Books &rarr;
          </Link>
        </div>
      </section>

      <FeaturesSection />
    </>
  );
}

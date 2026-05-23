import { Link } from 'react-router-dom';

/**
 * Full-viewport hero section displayed at the top of the Home page.
 * Background image is applied via CSS; text content is hardcoded here
 * since it belongs to the brand, not a data feed.
 */
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">✎ Your neighbourhood bookstore</p>
        <h1>
          Find Your Next <em>Great Read</em>
        </h1>
        <p>
          Thousands of hand-picked titles across every genre. From timeless
          classics to the latest bestsellers — we have a book for every reader.
        </p>
        <div className="hero-btns">
          <Link to="/books" className="btn btn-gold">
            Browse Books
          </Link>
          <Link to="/about" className="btn btn-outline">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

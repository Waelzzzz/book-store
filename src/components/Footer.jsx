import { Link } from 'react-router-dom';

/**
 * Site-wide footer shared across all pages.
 * Uses Link for internal routes so navigation stays within the SPA.
 */
export default function Footer() {
  return (
    <footer>
      <div className="footer-cols">
        {/* Brand column */}
        <div className="footer-col">
          <Link to="/" className="logo">
            The Reading <span>Nook</span>
          </Link>
          <p>
            Your independent neighbourhood bookstore since 2005.
            Books for every mind, every mood, every moment.
          </p>
        </div>

        {/* Quick links column */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Browse Books</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Genres column — links to the Store page */}
        <div className="footer-col">
          <h4>Genres</h4>
          <ul>
            <li><Link to="/books">Fiction</Link></li>
            <li><Link to="/books">Non-Fiction</Link></li>
            <li><Link to="/books">Science</Link></li>
            <li><Link to="/books">History</Link></li>
            <li><Link to="/books">Self-Help</Link></li>
          </ul>
        </div>

        {/* Contact details column */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">📍 12 Elm Street, Downtown</a></li>
            <li><a href="tel:+15550123456">📞 +1 (555) 012-3456</a></li>
            <li><a href="mailto:hello@readingnook.com">✉ hello@readingnook.com</a></li>
            <li><span>Mon–Sat: 9am – 8pm</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 The Reading Nook. All rights reserved.</p>
      </div>
    </footer>
  );
}

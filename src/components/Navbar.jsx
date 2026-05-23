import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Sticky top navigation bar with responsive hamburger menu.
 * NavLink automatically applies the "active" class on the matching route,
 * which is what the CSS uses for the underline highlight effect.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav>
      <div className="nav-inner">
        {/* Logo links back to home */}
        <Link to="/" className="logo" onClick={closeMenu}>
          The Reading <span>Nook</span>
        </Link>

        {/* Main nav links — "open" class toggles mobile dropdown */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" onClick={closeMenu}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            {/* "Visit Us" uses nav-shop styling; active state still applies */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-shop active' : 'nav-shop'
              }
              onClick={closeMenu}
            >
              Visit Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger button — visible only on mobile */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

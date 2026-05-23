import { Link } from 'react-router-dom';

/**
 * Reusable dark banner used at the top of inner pages (Books, About, Contact).
 *
 * Props:
 *  - title          {string} — main heading
 *  - subtitle       {string} — small descriptive line below the heading
 *  - breadcrumbLabel {string} — current page label shown after "Home ›"
 */
export default function PageBanner({ title, subtitle, breadcrumbLabel }) {
  return (
    <section className="page-banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span>{breadcrumbLabel}</span>
      </nav>
    </section>
  );
}

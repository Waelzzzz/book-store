/**
 * Centred section heading with a gold decorative bar.
 * Used on the Home page for "Featured Books" and "Why Shop With Us".
 *
 * Props:
 *  - title    {string}
 *  - subtitle {string}
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <div className="bar"></div>
      <p>{subtitle}</p>
    </div>
  );
}

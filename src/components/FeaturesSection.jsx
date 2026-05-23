import SectionHeading from './SectionHeading';
import { features } from '../data/features';

/**
 * "Why Shop With Us" section — four feature cards driven by data/features.js.
 * Extracted as a component because it is a self-contained, reusable block.
 */
export default function FeaturesSection() {
  return (
    <section className="features-section">
      <SectionHeading
        title="Why Shop With Us"
        subtitle="More than just a bookstore — a community for readers."
      />

      <div className="features-grid">
        {features.map((feat) => (
          <div className="feat-card" key={feat.id}>
            <div className="feat-icon" aria-hidden="true">{feat.icon}</div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import PageBanner from '../components/PageBanner';

/**
 * About page — mirrors about.html.
 * Shows the page banner and the two-column story section.
 */
export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Independent, passionate, and built around books."
        breadcrumbLabel="About"
      />

      <section className="about-section">
        <div className="about-inner">
          <img
            src="https://picsum.photos/seed/about1/600/500"
            alt="Inside The Reading Nook"
          />

          <div className="about-text">
            <h2>A Store Born From a Love of Reading</h2>
            <p>
              The Reading Nook opened its doors in 2005, founded by lifelong book
              lover Margaret Ellis in a small corner shop on Elm Street. What started
              as a modest collection of used paperbacks quickly grew into a full
              independent bookstore beloved by the local community.
            </p>
            <p>
              We believe books have the power to change lives, spark conversations,
              and build bridges between people. That belief shapes every decision we
              make — from the titles we stock to the events we host.
            </p>
            <p>
              Today we carry over 10,000 titles across 20 genres, host weekly reading
              clubs, and welcome thousands of visitors every month. But at heart,
              we&apos;re still the same cosy neighbourhood bookshop we always were.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

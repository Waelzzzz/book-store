/**
 * Row of category filter chips.
 * Used on the Store page as interactive filter buttons.
 *
 * Props:
 *  - categories     {string[]}          — list of category labels
 *  - activeCategory {string}            — currently selected category
 *  - onSelect       {(cat: string) => void} — called when a chip is clicked
 */
export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter books by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cat-chip${activeCategory === cat ? ' active' : ''}`}
          onClick={() => onSelect(cat)}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

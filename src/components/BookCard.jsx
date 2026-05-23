/**
 * Single book card used in both the Home featured grid and the Store page.
 *
 * Props — book object:
 *  - id       {number}
 *  - title    {string}
 *  - author   {string}
 *  - category {string}
 *  - price    {string}  e.g. "$14.99"
 *  - seed     {string}  picsum seed for deterministic cover image
 */
export default function BookCard({ book }) {
  const { title, author, category, price, seed } = book;
  const imageUrl = `https://picsum.photos/seed/${seed}/300/360`;

  return (
    <article className="book-card">
      <div className="book-cover">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>

      <div className="book-body">
        <p className="book-category">{category}</p>
        <h3>{title}</h3>
        <p className="book-author">{author}</p>

        <div className="book-footer">
          <span className="book-price">{price}</span>
          <button
            className="book-btn"
            aria-label={`Add ${title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

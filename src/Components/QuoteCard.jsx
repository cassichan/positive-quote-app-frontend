export default function QuoteCard({ quote }) {
  return (
    <div className="quoteCard">
      <main>
        <p>
          {quote &&
            quote.map((quote) => {
              <section className="posted-quote" key={quote.id}></section>;
            })}
        </p>
        <p>{quote.body}</p>
        <h6>
          <i>{quote.author}</i>
        </h6>
      </main>
    </div>
  );
}

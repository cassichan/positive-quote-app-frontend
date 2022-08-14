export default function QuoteCard({ quote }) {
  return (
    <div className="quoteCard">
      <p>{quote.body}</p>
      <h6>
        <i>{quote.author}</i>
      </h6>
    </div>
  );
}

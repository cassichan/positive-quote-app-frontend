import { useState, useEffect } from "react";

export default function QuoteList() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("apilink")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch(() => {});
  }, []);
  return (
    <p>
      This is a list of all the quotes!
      {quote &&
        quote.map((quote) => {
          <section className="quote-list" key={quote.id}>
            <p>{quote.body}</p>
            <h6>
              <i>{quote.author}</i>
            </h6>
          </section>;
        })}
    </p>
  );
}

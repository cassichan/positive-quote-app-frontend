import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard.jsx";

export default function QuoteList() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("apilink")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch(() => {});
  }, []);
  if (!quote) {
    return <h2>Loading...</h2>;
  }
  return (
    <p>
      This is a list of all the quotes!
      {quote &&
        quote.map((quote) => {
          <section className="quote-list" key={quote.id}>
            <QuoteCard />
          </section>;
        })}
    </p>
  );
}

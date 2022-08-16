import { useState, useEffect } from "react";

export default function QuoteList() {
  const [quote, setQuote] = useState("");

  const getQuotes = async (quote) => {
    try {
      const results = await fetch(
        "https://inspirational-quotes-cc.web.app/all-quotes"
      );
      const data = await results.json();
      setQuote(data);
      console.log(data);
      // console.log(quote)
    } catch (err) {
      alert(err);
    }
  };

  // useEffect(() => {
  //   fetch("https://inspirational-quotes-cc.web.app/all-quotes")
  //     .then((res) => res.json())
  //     .then((data) => setQuote(data))
  //     // .catch((error) => console.log(error));
  // }, []);
  return (
    <main>
      <h2>Quotelist</h2>
      <button
        onClick={() => {
          getQuotes();
        }}
      >
        Click to show quotes in console!
      </button>

      <p id="quote-list">
        {quote &&
          quote.map((quote) => {
            <section className="posted-quote" key={quote.id}>
              <p>
                {quote.body}
                {quote.author}
              </p>
            </section>;
          })}
      </p>
    </main>
  );
}

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard.jsx";

export default function QuoteList() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // e.preventDefault();
    // fetch("https://inspirational-quotes-cc.web.app/all-quotes")
    fetch("https://api.sampleapis.com/wines/reds")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <main>
      <QuoteCard quote={quote} />
    </main>
  );
}

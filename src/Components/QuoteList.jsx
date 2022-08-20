import { useState, useEffect } from "react";
import Quotes from "./Quotes.jsx";
import "../Styles/QuoteList.css";

export default function QuoteList() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://inspirational-quotes-cc.web.app/all-quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);
  if (!quote) {
    return <h1>Loading...</h1>
  }

  // const printQuotes = async (quote) => {
  //   try {
  //     const results = await fetch(
  //       "https://inspirational-quotes-cc.web.app/all-quotes"
  //     );
  //     const data = await results.json();
  //     // setQuote(data);
  //     console.log(data);
  //     console.log(quote)
  //   } catch (err) {
  //     alert(err);
  //   }
  // }
  return (
    <div className="main">
      <br/>
      <h1><u>Quote Collection</u></h1>
      <br />
      <ul>
        <Quotes quote={quote} />
      </ul>
      {/* <button
        onClick={() => {
          printQuotes();
        }}
      >
        Click to show quotes in console!
      </button> */}
    </div>
  );
}

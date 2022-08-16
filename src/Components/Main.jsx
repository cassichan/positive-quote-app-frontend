
import QuoteList from "./QuoteList.jsx";

export default function Main({quotes, setQuotes}) {
  return (
    <>
      <section>
        <u> This is main</u>
      </section>
      <QuoteList quotes = {quotes} setQuotes = {setQuotes}/>
    </>
  );
}

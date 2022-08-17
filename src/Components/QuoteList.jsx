import {useState, useEffect} from 'react'
import Quotes from './Quotes.jsx'
import "../Styles/QuoteList.css"


export default function SecondQuoteList ()  {
    const [quote, setQuote] = useState('')
    useEffect(() => {
        fetch("https://inspirational-quotes-cc.web.app/all-quotes")
        .then(res => res.json())
        .then(data => setQuote(data))
    },[])
    if (!quote) {
        return <h2>Loading...</h2>;
      }

      const printQuotes = async (quote) => {
        try {
          const results = await fetch(
            "https://inspirational-quotes-cc.web.app/all-quotes"
          );
          const data = await results.json();
          setQuote(data);
          console.log(data);
          console.log(quote)
        } catch (err) {
          alert(err);
        }
      }
    return (
        <div id = "main">
            <ul>
                <Quotes  quote={quote}/>
            </ul>
            <button
        onClick={() => {
          printQuotes();
        }}
      >
        Click to show quotes in console!
      </button><br/><br/>
      <img src="https://cdn.pixabay.com/photo/2017/08/01/22/31/wall-2568346_1280.jpg" alt="A graffitied red brick wall that says 'Everything has beauty but not everyone can see it'"></img>&nbsp;&nbsp;&nbsp;
      <img src="https://cdn.pixabay.com/photo/2015/04/18/20/57/quotes-729173_1280.jpg" alt="Wooden blocks with letters and a few next to eachother showing phrase 'carpe diem"></img>
        </div>

    )
    }
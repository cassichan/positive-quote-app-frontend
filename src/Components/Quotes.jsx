export default function Quotes({quote}) {

    return (
        <section>
        {quote && quote.map((quote)=>
            <div className="posted-quote" key={quote.id}>
            <h3>{quote.body}</h3>
            <p>{quote.author}</p>
            </div>
            
        )}
   
        </section>
    )
}
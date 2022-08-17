export default function Quotes({quote}) {

    return (
        <section>   
        {quote && quote.map((quote)=>
            <div className="posted-quote" key={quote.id}>
            <h3><i>"{quote.body}"</i></h3>
            <p>-{quote.author}<br/><br/><br/></p>
            </div>
        )}
        </section>
    )
}
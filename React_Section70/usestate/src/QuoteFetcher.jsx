import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({quote: "", author: ""});

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QUOTE_URL);
    //         const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse.quote;
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();
    // }, []);

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() { // URL을 가져오는 것을 기다리는 역할
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
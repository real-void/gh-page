import "./quotes_container.css"
import QuoteBox from "./QuoteBox/QuoteBox";
import ChangeQuoteButton from "./ChangeQuoteButton/ChangeQuoteButton";
import {useState} from "react";

const QuotesContainer = (props: any) => {
    const [quotePosition, setQuotePosition] = useState(0)
    const len = props.quotes.length
    const pos = 100 / len
    const nextQuotePosition = () => {
        if (quotePosition < pos * (len - 1)) {
            setQuotePosition(quotePosition + pos);
            console.log(`did for ${pos}`)
        }
    }
    const preQuotePosition = () => {
        if (quotePosition >= pos)
            setQuotePosition(quotePosition - pos)
    }
    let i = 0
    return (
        <div className="flex quotes-container connect-box-holder">
            <ChangeQuoteButton onClick={preQuotePosition} style={{
                visibility: (quotePosition < pos) ? "hidden" : "visible",
            }}>
                {"<"}
            </ChangeQuoteButton>
            <div className="full-height">
                <div className="quotes-internal-container">
                    <div className="flex space-b quote-holder" style={{transform: `translate(-${quotePosition}%,0)`}}>
                        {
                            props.quotes.map(
                                (each: string) =>
                                    <QuoteBox key={each} author={props.authors[i++]}>
                                        {each}
                                    </QuoteBox>
                            )
                        }
                    </div>
                </div>
            </div>
            <ChangeQuoteButton onClick={nextQuotePosition} style={{
                visibility: (quotePosition > pos * (len - 2)) ? "hidden" : "visible",
            }}>
                {">"}
            </ChangeQuoteButton>
        </div>
    )
}
export default QuotesContainer
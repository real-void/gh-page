import "./change_quote_button.css"

const ChangeQuoteButton = (props: any) => {
    return (
        <div className="cursor-p change-quote-button" onClick={props.onClick} style={props.style}>
            {props.children}
        </div>
    )
}
export default ChangeQuoteButton
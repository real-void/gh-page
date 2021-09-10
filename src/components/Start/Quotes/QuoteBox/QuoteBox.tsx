import "./quote_box.css"
import Paragraph from "../../../Content/Paragraph/Paragraph";

const QuoteBox = (props: any) => {
    return (
        <div className="flex flex-col space-b quote-box">
            <div className="quote-body">
                "{props.children}"
            </div>
            <Paragraph style={{color: "black"}}>
                {props.author}
            </Paragraph>
        </div>
    )
}

export default QuoteBox
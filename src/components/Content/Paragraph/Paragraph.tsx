import "./paragraph.css"

const Paragraph = (props: any) => {
    return (
        <div className="m-auto paragraph" style={props.style}>
            {props.children}
        </div>
    )
}
export default Paragraph
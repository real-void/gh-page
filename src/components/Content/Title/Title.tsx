import "./title.css"

const Title = (props: any) => {
    return (
        <div className="flex title">
            <div className="title-internal">
                {props.children}
            </div>
        </div>
    )
}
export default Title
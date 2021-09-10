import "./connect_box.css"

const ConnectBox = (props: any) => {
    return (
        <div className="flex m-auto connect-box cursor-p" onClick={() =>
            window.open(props.url, "_blank")
        } style={{marginBottom: "20px", marginRight: "20px"}}>
            <div className="m-auto img-inside">
                <img src={props.img} className="full-height full-width" alt=""/>
            </div>
            <div className="m-auto connect-box-text c-font-default">
                {props.children}
            </div>
        </div>
    )
}

export default ConnectBox
import "./connect_box_container.css"
import ConnectBox from "./ConnectBox/ConnectBox";

const ConnectBoxContainer = (props: any) => {
    let i = 0;
    return (
        <div className="flex" style={{justifyContent: "center"}}>
            <div className="flex connect-box-holder">
                {
                    props.images.map(
                        (each: any) =>
                            <ConnectBox key={i} img={each} url={props.urls[i]}>
                                {props.contents[i++]}
                            </ConnectBox>
                    )
                }
            </div>
        </div>
    )
}
export default ConnectBoxContainer
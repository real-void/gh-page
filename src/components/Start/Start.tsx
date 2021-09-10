import "./start.css"
import Content from "../Content/Content";
import QuotesContainer from "./Quotes/QuotesContainer";
import ConnectBox from "./ConnectBox/ConnectBox/ConnectBox";
import github from "../../assets/connect/github.png"
import steam from "../../assets/connect/steam.png"
import gmail from "../../assets/connect/gmail.svg"
import instagram from "../../assets/connect/instagram.png"
import ConnectBoxContainer from "./ConnectBox/ConnectBoxContainer";

const Start = (props: any) => {
    return (
        <div className="flex flex-col start">
            <div className="cut-background content-container">
                <Content title="Welcome">
                    welcome to my github page
                </Content>
            </div>
            <div className="black content-container" ref={props.refs[1]}>
                <Content title="Quotes"/>
                <QuotesContainer
                    quotes={[
                        "Life is like riding a bicycle. To keep your balance you must keep moving.",
                        "Life would be tragic if it weren't funny.",
                        "If I have seen further than others, it is by standing upon the shoulders of giants.",
                        "A friend to all is a friend to none.",
                        "Thinking: the talking of the soul with itself."
                    ]}
                    authors={[
                        "Albert Einstein",
                        "Stephen Hawking",
                        "Isaac Newton",
                        "Aristotle",
                        "Plato"
                    ]}
                />
            </div>
            <div className="content-container" ref={props.refs[2]}>
                <Content title="Projects">
                    I will add my projects as soon as they are ready
                </Content>
            </div>
            <div className="content-container" ref={props.refs[3]}>
                <Content title="Connect">
                    <div className="flex flex-col" style={{flexWrap: "wrap"}}>

                        <ConnectBoxContainer
                            urls={["", "https://steamcommunity.com/profiles/76561198918692179"]}
                            images={[github, steam]}
                            contents={["GitHub", "Steam"]}
                        />
                        <ConnectBoxContainer
                            urls={["mailto:sina.snkm@gmail.com", "https://www.instagram.com/sinakmbx/"]}
                            images={[gmail, instagram]}
                            contents={["Gmail", "Instagram"]}
                        />
                    </div>
                </Content>
            </div>
            <div className="content-container" ref={props.refs[0]}>
                <Content title="About Me">
                    My nickname is VOID and i am a programmer and web developer,
                    i will start writing public projects (open source) soon as i end these current projects.
                </Content>
            </div>
        </div>
    )
}
export default Start
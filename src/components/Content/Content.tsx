import Title from "./Title/Title";
import Paragraph from "./Paragraph/Paragraph";

const Content = (props: any) => {
    return (
        <div className="flex flex-col">
            <Title>
                {props.title}
            </Title>
            <Paragraph>
                {props.children}
            </Paragraph>
        </div>
    )
}
export default Content
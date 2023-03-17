import Button from "../..";
import { DemoWrapper } from "../../../../styles";

const ButtonDemoI: React.FC = () => {
    return (
        <DemoWrapper>
            <Button></Button>
            <Button primary>Primary Button</Button>
            <Button danger>Danger Button</Button>
            <Button>Normal Button</Button>
        </DemoWrapper>
    )
}

export default ButtonDemoI;
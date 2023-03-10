import Switch from '../..';
import DemoWrapper from "../styles";

const DemoIII: React.FC<{}> = () => {
    return (
        <DemoWrapper>
            <Switch checkedChildren="开启" unCheckedChildren="关闭"></Switch>
            <Switch checkedChildren="1" unCheckedChildren="0"></Switch>
            <Switch></Switch>
        </DemoWrapper>
    )
}

export default DemoIII
import Switch from '../..';
import { DemoWrapper } from "../../../../styles";

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const DemoIII: React.FC<{}> = () => {
    return (
        <DemoWrapper>
            <Switch checkedChildren="开启" unCheckedChildren="关闭"></Switch>
            <Switch checkedChildren="1" unCheckedChildren="0"></Switch>
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
        </DemoWrapper>
    )
}

export default DemoIII
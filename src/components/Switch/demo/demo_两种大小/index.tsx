import Switch from '../..';
import { DemoWrapper } from "../../../../styles";

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const DemoIV: React.FC<{}> = () => {
    return (
        <DemoWrapper>
            <Switch size='small' checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
            <Switch size='large' checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
        </DemoWrapper>
    )
}

export default DemoIV
import Switch from '../..';
import { DemoWrapper } from "../../../../styles";

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const DemoV: React.FC<{}> = () => {
    return (
        <DemoWrapper>
            <Switch loading checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
            <Switch checked loading size='small' checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
        </DemoWrapper>
    )
}

export default DemoV
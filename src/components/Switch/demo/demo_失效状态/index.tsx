import * as React from 'react';
import styled from 'styled-components';

import Switch from '../..';
import { DemoWrapper } from "../../../../styles";

const StyledButton = styled.button`
    padding: 12px;
    background-color: #ffffff;
    border: none;
    border-radius: 24px;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, .3);
    text-align: center;

    &:hover {
        background-color: rgba(0, 0, 0, .3);
    }
`

const DemoII: React.FC<{}> = () => {
    const [disabled, setDisabled] = React.useState(false)

    function onclick() {
        setDisabled(!disabled);
    }

    return (
        <DemoWrapper>
            <Switch disabled={disabled} />
            <StyledButton onClick={onclick}>{disabled ? "Enable" : "Disable"}</StyledButton>
            <p>Switch的失效状态</p>
        </DemoWrapper>
    )
}

export default DemoII
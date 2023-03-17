import styled from "styled-components";

const buttonPrefixCls = 'pui-button';
const duration = '.3s';

interface IButtonWarpperProps {
    isDanger?: boolean;
}

const Wrapper = styled.div<IButtonWarpperProps>`
    .${buttonPrefixCls} {
        min-width: 30px;
        min-height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 15px;
        border: none;
        border-radius: .3rem;
        font-size: 6px;
        line-height: 1;
        text-align: center;
        color: #ffff;
        background-color: rgb(25, 165, 255);
        transition: all ${duration} ease;
        cursor: pointer;

        &:hover {
            background-color: rgb(60, 200, 255);
        }

        &--danger {
            background-color: rgb(255, 0, 0);

            &:hover {
                background-color: rgb(255, 100, 100);
            }
        }
    }
`

export default Wrapper
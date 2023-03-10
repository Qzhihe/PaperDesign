import styled from "styled-components";

const switchPrefixCls = "pui-switch";
const duration = ".3s";

const Wrapper = styled.div`
    .${switchPrefixCls} {
        position: relative;
        display: inline-block;
        white-space: nowrap;
        min-width: 44px;
        height: 22px;
        line-height: 20px;
        vertical-align: middle;
        border-radius: 20px 20px;
        border: 1px solid #ccc;
        background-color: #ccc;
        cursor: pointer;
        transition: all ${duration} ease-in-out;
        overflow: hidden;
        user-select: none;

        &__inner {
            height: 100%;
            display: block;
            padding-inline-start: 24px;
            padding-inline-end: 9px;
            overflow: hidden;
            transition: padding-inline-start ${duration} ease-in-out, padding-inline-end ${duration} ease-in-out;

            &--checked,
            &--unchecked {
                display: block;
                color: #fff;
                font-size: 12px;
                text-align: center;
                transition: margin-inline-start ${duration} ease-in-out, margin-inline-end ${duration} ease-in-out;
            }

            &--checked {
                margin-inline-start: calc(-100% + 20px - 48px);
                margin-inline-end: calc(100% - 20px + 48px);
            }

            &--unchecked {
                margin-top: -20px;
                margin-inline-start: 0;
                margin-inline-end: 0;
            }
        }

        &__handle {
            position: absolute;
            width: 18px;
            height: 18px;
            left: 2px;
            top: 1px;
            border-radius: 50% 50%;
            background-color: #fff;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
            transform: scale(1);
            transition: all ${duration} ease-in-out;
            animation-timing-function: ease-in-out;
            animation-duration: ${duration};
            animation-name: SwitchOff;

            &:hover {
                transform: scale(1.1);
                animation-name: SwitchOn;
            }
        }

        &:focus {
            box-shadow: 0 0 0 2px tint(#2db7f5, 80%);
            outline: none;
        }

        &--checked {
            border: 1px solid #87d068;
            background-color: #87d068;

            .${switchPrefixCls}__handle {
                inset-inline-start: calc(100% - 20px);
            }

            .${switchPrefixCls}__inner {
                padding-inline-start: 9px;
                padding-inline-end: 24px;

                &--checked {
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                }

                &--unchecked {
                    margin-inline-start: calc(100% - 22px + 48px);
                    margin-inline-end: calc(-100% + 22px - 48px);
                }
            }

            &:after{
                left: 22px;
            }
        }

        &--disabled {
            cursor: no-drop;
            background: #ccc;
            border-color: #ccc;

            &:after{
                background: #9e9e9e;
                animation-name: none;
                cursor: no-drop;
            }

            &:hover:after{
                transform: scale(1);
                animation-name: none;
            }
        }
    }

    @keyframes SwitchOn {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1.1);
        }
    }

    @keyframes SwitchOff {
        0% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`

export default Wrapper
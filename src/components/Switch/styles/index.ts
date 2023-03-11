import styled from "styled-components";

const switchPrefixCls = "pui-switch";
const duration = ".3s";

const Wrapper = styled.div<{scale: number}>`    
    .${switchPrefixCls} {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        white-space: nowrap;
        min-width: ${props => props.scale * 44}px;
        height: ${props => props.scale * 22}px;
        line-height: ${props => props.scale * 20}px;
        vertical-align: middle;
        border-radius: ${props => props.scale * 20}px;
        border: 1px solid #ccc;
        background-color: #ccc;
        cursor: pointer;
        transition: all ${duration} ease-in-out;
        overflow: hidden;
        user-select: none;

        &__inner {
            height: ${props => props.scale * 20}px;
            display: block;
            padding-inline-start: ${props => props.scale * 24}px;
            padding-inline-end: ${props => props.scale * 9}px;
            overflow: hidden;
            transition: padding-inline-start ${duration} ease-in-out, padding-inline-end ${duration} ease-in-out;

            &--checked,
            &--unchecked {
                display: block;
                color: #fff;
                font-size: ${props => props.scale * 12}px;
                text-align: center;
                transition: margin-inline-start ${duration} ease-in-out, margin-inline-end ${duration} ease-in-out;
            }

            &--checked {
                margin-inline-start: calc(-100% + ${props => props.scale * 20}px - ${props => props.scale * 48}px);
                margin-inline-end: calc(100% - ${props => props.scale * 20}px + ${props => props.scale * 48}px);
            }

            &--unchecked {
                margin-top: -${props => props.scale * 20}px;
                margin-inline-start: 0;
                margin-inline-end: 0;
            }
        }

        &__handle {
            position: absolute;
            width: ${props => props.scale * 18}px;
            height: ${props => props.scale * 18}px;
            left: ${props => props.scale * 2}px;
            top: ${props => props.scale * 1}px;
            border-radius: 50% 50%;
            background-color: #fff;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
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
            border: 1px solid #e0635f;
            background-color: #e0635f;

            .${switchPrefixCls}__handle {
                inset-inline-start: calc(100% - ${props => props.scale * 20}px);
            }

            .${switchPrefixCls}__inner {
                padding-inline-start: ${props => props.scale * 9}px;
                padding-inline-end: ${props => props.scale * 24}px;

                &--checked {
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                }

                &--unchecked {
                    margin-inline-start: calc(100% - ${props => props.scale * 20}px + ${props => props.scale * 48}px);
                    margin-inline-end: calc(-100% + ${props => props.scale * 20}px - ${props => props.scale * 48}px);
                }
            }
        }

        &--disabled {
            cursor: no-drop;

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

    @keyframes LoadingCircle {
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Wrapper
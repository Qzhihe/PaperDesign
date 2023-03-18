import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Wrapper from './styles';

export type SwitchChangeEventHandler = (
    checked: boolean,
    event?: React.MouseEvent<HTMLButtonElement>,
) => void;

export type SwitchClickEventHandler = SwitchChangeEventHandler;

/** 
 * @param className         类名
 * @param prefixCls         类名前缀
 * @param disabled          是否禁用
 * @param checkedChildren   开关开启时子组件
 * @param unCheckedChildren 开关关闭时子组件
 * @param onChange          状态变更时调用
 * @param onClick           开关被点击时调用
 * @param ckecked           开关当前状态
 * @param defaultChecked    默认开关状态
 * @param loadingIcon       开关加载时icon
 * @param style             开关内联样式
 * @param title             开关标题
*/

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
    className?: string;
    prefixCls?: string;
    disabled?: boolean;
    size?: string;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
    checked?: boolean;
    loading?: boolean;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    (
        {
            className,
            prefixCls = 'pui-switch',
            disabled,
            size,
            checkedChildren,
            unCheckedChildren,
            onClick,
            onChange,
            checked,
            loading,
            ...restProps
        },
        ref
    ) => {
        const [innerChecked, setInnerChecked] = useState(checked);
        const [innerDisabled, setInnerDisabled] = useState(disabled);

        const loadingIcon = (
            <span className={`anticon anticon-loading anticon-spin ${prefixCls}--loading__icon`}>
                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                </svg>
            </span>
        )

        useEffect(() => {
            setInnerChecked(checked);
            setInnerDisabled(disabled || loading);
        }, [checked, loading, disabled]);

        function triggerChange(
            newChecked: boolean,
            event?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
        ) {
            if (!innerDisabled) {
                setInnerChecked(newChecked);
                onChange?.(newChecked);
            }
        }

        function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
            triggerChange(!innerChecked, e);
            onClick?.(innerChecked as boolean);
        }

        // 根据 innerChecked 和 size 的状态不同，动态拼接 className 以实现不同样式的切换
        const switchClassName = classNames(prefixCls, className, {
            [`${prefixCls}--checked`]: innerChecked,
            [`${prefixCls}--disabled`]: innerDisabled,
        });

        return (
            <Wrapper scale={size === "small" ? 0.8 : size === "large" ? 1.2 : 1}>
                <button
                    {...restProps}
                    type='button'
                    className={switchClassName}
                    role='switch'
                    ref={ref}
                    onClick={onInternalClick}
                >
                    <div className={`${prefixCls}__handle`}>{loading ? loadingIcon : null}</div>
                    <span className={`${prefixCls}__inner`}>
                        <span className={`${prefixCls}__inner--checked`}>{checkedChildren}</span>
                        <span className={`${prefixCls}__inner--unchecked`}>{unCheckedChildren}</span>
                    </span>
                </button>
            </Wrapper>
        );
    }
);

export default Switch;
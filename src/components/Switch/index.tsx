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
 * @param tabIndex          ？
 * @param ckecked           开关当前状态
 * @param defaultChecked    默认开关状态
 * @param loadingIcon       开关加载时icon
 * @param style             开关内联样式
 * @param title             开关标题
*/

interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
    className?: string;
    prefixCls?: string;
    disabled?: boolean;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
    tabIndex?: number;
    checked?: boolean;
    defaultChecked?: boolean;
    loadingIcon?: React.ReactNode;
    style?: React.CSSProperties;
    title?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    (
        {
            className,
            prefixCls = 'pui-switch',
            disabled,
            checkedChildren,
            unCheckedChildren,
            onClick,
            onChange,
            checked,
            loadingIcon,
            ...restProps
        },
        ref
    ) => {
        const [innerChecked, setInnerChecked] = useState(checked);

        useEffect(() => {
            setInnerChecked(checked);
        }, [checked]);

        function triggerChange(
            newChecked: boolean,
            event?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
        ) {
            if (!disabled) {
                setInnerChecked(newChecked);
                onChange?.(newChecked);
            }
        }

        function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
            triggerChange(!innerChecked, e);
            onClick?.(innerChecked as boolean);
        }

        // 根据 innerChecked 的状态不同，动态拼接 className 以实现不同样式的切换
        const switchClassName = classNames(prefixCls, className, {
            [`${prefixCls}--checked`]: innerChecked,
            [`${prefixCls}--disabled`]: disabled,
        });

        return (
            <Wrapper>
                <button
                    {...restProps}
                    type='button'
                    className={switchClassName}
                    ref={ref}
                    onClick={onInternalClick}
                >
                    <div className={`${prefixCls}__handle`}>{loadingIcon}</div>
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
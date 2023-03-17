import * as React from "react";
import classNames from "classnames";

import Wrapper from "./styles"

export interface ButtonProps {
    prefixCls?: string;
    className?: string;
    primary?: boolean;
    danger?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (
    {
        prefixCls = 'pui-button',
        className,
        primary,
        danger,
        children,
    }
) => {
    const [isPrimary, setIsPrimary] = React.useState(false)
    const [isDanger, setIsDanger] = React.useState(false)

    React.useEffect(() => {
        setIsDanger(danger !== undefined)
    }, [danger])
    
    const buttonClassName = classNames(prefixCls, className, {
        [`${prefixCls}--primary`]: isPrimary,
        [`${prefixCls}--danger`]: isDanger,
    });

    return (
        <Wrapper>
            <button className={buttonClassName}>{children}</button>
        </Wrapper>
    )
}

export default Button
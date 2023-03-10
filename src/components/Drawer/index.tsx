import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss';

interface IDrawerProps {
  className?: string;
  prefixCls?: string;
  opened?: boolean;
  closable?: boolean;
  destroyOnClose?: boolean;
  getContainer?: HTMLElement;
  maskClosable?: boolean;
  mask?: boolean;
  drawerStyle?: object;
  width?: string | number;
  zIndex?: number;
  placement?: string;
  onClose?: () => any;
  children?: any;
};

function Drawer (props: IDrawerProps) {
  const {
    className,
    prefixCls = 'bs-drawer',
    opened,
    closable = true, 
    destroyOnClose, 
    getContainer = document.body, 
    maskClosable = true, 
    mask = true, 
    drawerStyle, 
    width = '300px',
    zIndex = 10,
    placement = 'right', 
    onClose,
    children
  } = props;

  const [innerOpened, setInnerOpened] = useState(opened);
  const [isDesChild, setIsDesChild] = useState(false);

  function onInternalClose () {
    setInnerOpened((prev) => {
      if (getContainer !== null && prev) {
        getContainer.style.overflow = 'auto';
      }

      return false;
    });

    if (destroyOnClose) {
      setIsDesChild(true);
    }

    // onClose?.(false);
  };

  useEffect(() => {
    setInnerOpened(() => {
      if (getContainer !== null && opened) {
        getContainer.style.overflow = 'hidden';
      }
      return opened;
    });
    setIsDesChild(false);
  }, [opened, getContainer]);

  const childDom = (
    <div 
      className={prefixCls} 
      style={{
        position: getContainer === null ? 'absolute' : 'fixed',
        width: innerOpened ? '100%' : '0',
        zIndex
      }}
    >
      { !!mask && <div className={`${prefixCls}__mask`} onClick={maskClosable ? onInternalClose : () => null}></div> }
      <div 
        className={`${prefixCls}__content`} 
        style={{
          width,
          [placement]: innerOpened ? 0 : '-100%',
          ...drawerStyle
        }}>
        {isDesChild ? null : children}
        {!!closable}
      </div>
    </div>
  )

  return getContainer === null ? childDom : ReactDOM.createPortal(childDom, getContainer);
}

export default Drawer;
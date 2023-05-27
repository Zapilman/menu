import React, { FC, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { OverlayingPopup } from '_UI/OverlayingPopup';
import cn from 'classnames';

import { useSidebar } from './Sidebar.context';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { isOpen, setOpen } = useSidebar();
  const nodeRef = useRef(null);
  return (
    <CSSTransition in={isOpen} nodeRef={nodeRef} timeout={300} unmountOnExit>
      <div
        className={cn(styles.sidebarOutside, {
          [styles.sidebarOutside_disappear]: !isOpen,
        })}
        onClick={() => {
          setOpen(false);
        }}
        ref={nodeRef}
      >
        <div
          className={cn(styles.sidebar, {
            [styles.sidebar_fadeOut]: !isOpen,
          })}
        >
          Sidebar
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;

import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './Sidebar.module.css';

const Sidebar = props => {
  const sidebarRoot = document.getElementById('sidebar-root');

  const sidebarElement = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames={{
        enter: classes['sidebar__animate-enter'],
        enterActive: classes['sidebar__animate-enter-active'],
        exit: classes['sidebar__animate-exit'],
        exitActive: classes['sidebar__animate-exit-active'],
      }}
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes['sidebar']} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(sidebarElement, sidebarRoot);
};

export default Sidebar;

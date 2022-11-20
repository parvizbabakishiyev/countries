import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './Backdrop.module.css';

const Backdrop = props => {
  const backdropRoot = document.getElementById('backdrop-root');
  const backdropElement = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames={{
        enter: classes['backdrop__animate-enter'],
        enterActive: classes['backdrop__animate-enter-active'],
        exit: classes['backdrop__animate-exit'],
        exitActive: classes['backdrop__animate-exit-active'],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.backdrop} onClick={props.onClick} />
    </CSSTransition>
  );

  return ReactDOM.createPortal(backdropElement, backdropRoot);
};

export default Backdrop;

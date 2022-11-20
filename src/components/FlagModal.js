import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './FlagModal.module.css';

const FlagModal = props => {
  const flagModalRoot = document.getElementById('modal-root');

  const flagElement = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames={{
        enter: classes['flag-modal__animate-enter'],
        enterActive: classes['flag-modal__animate-enter-active'],
        exit: classes['flag-modal__animate-exit'],
        exitActive: classes['flag-modal__animate-exit-active'],
      }}
      mountOnEnter
      unmountOnExit
    >
      <img
        className={classes['flag-modal']}
        src={props.flagUrl}
        alt='country flag'
      />
    </CSSTransition>
  );
  return ReactDOM.createPortal(flagElement, flagModalRoot);
};

export default FlagModal;

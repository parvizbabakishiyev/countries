import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Spinner.module.css';
import CSSSpinner from './CSSSpinner';

const spinnerRoot = document.getElementById('spinner-root');

const Spinner = () => {
  return ReactDOM.createPortal(
    <div className={classes.spinner}>
      <CSSSpinner />
    </div>,
    spinnerRoot
  );
};

export default Spinner;

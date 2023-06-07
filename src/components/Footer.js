import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer__copyright}>
        {new Date().getFullYear()} &#169; All rights reserved. Developed by <a href='https://github.com/parvizbabakishiyev'>Parviz Babakishiyev</a>
      </span>
    </footer>
  );
};

export default Footer;

import React from 'react';
import WebsiteLogo from '../assets/logo.svg';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes['logo__container']}>
      <img
        draggable='false'
        onContextMenu={e => e.preventDefault()}
        className={classes.logo}
        src={WebsiteLogo}
        alt='Logo of website'
      />
      <span>Countries</span>
    </div>
  );
};

export default Logo;

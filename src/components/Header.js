import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import SidebarIcon from '../assets/siderbar-icon.svg';
import classes from './Header.module.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideberOpenHandler = () => {
    setIsSidebarOpen(true);
  };

  const sideberCloseHandler = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className={classes.header}>
      <Backdrop show={isSidebarOpen} onClick={sideberCloseHandler} />
      <Sidebar show={isSidebarOpen}>
        <nav className={classes['nav__sidebar']}>
          <NavLinks onClick={sideberCloseHandler} />
        </nav>
      </Sidebar>
      <div className={classes['header__container']}>
        <Logo />
        <button
          onClick={sideberOpenHandler}
          className={classes['header__sidebar-button']}
        >
          <img
            draggable='false'
            onContextMenu={e => e.preventDefault()}
            className={classes['header__sidebar-icon']}
            alt='menu icon'
            src={SidebarIcon}
          />
        </button>
        <nav className={classes.nav}>
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;

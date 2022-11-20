import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SavedContext from '../store/saved-context';
import classes from './NavLinks.module.css';

const NavLinks = props => {
  const savedCtx = useContext(SavedContext);

  return (
    <ul className={classes['nav__list-items']}>
      <li>
        <NavLink to='/' onClick={props.onClick}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/saved' onClick={props.onClick}>
          {`Saved (${savedCtx.savedCountries.length || 0}`})
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' onClick={props.onClick}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

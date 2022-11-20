import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SavedContext from '../store/saved-context';
import Spinner from '../components/Spinner';
import classes from './Root.module.css';

const Root = () => {
  const savedCtx = useContext(SavedContext);

  return (
    <React.Fragment>
      {savedCtx.isSaving && <Spinner />}
      <Header />
      <main className={classes['main-content']}>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Root;

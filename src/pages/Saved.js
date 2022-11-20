import React, { useContext } from 'react';
import CountryCard from '../components/CountryCard';
import Message from '../components/Message';
import SavedContext from '../store/saved-context';
import classes from './Saved.module.css';

const Saved = () => {
  const savedCtx = useContext(SavedContext);
  const numOfSaved = savedCtx.savedCountries.length;

  return (
    <React.Fragment>
      {numOfSaved === 0 ? (
        <Message messageText='No saved countries' />
      ) : (
        <React.Fragment>
          <h1 className={classes['saved__header']}>Saved countries</h1>
          {savedCtx.savedCountries.map(country => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Saved;

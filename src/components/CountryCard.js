import React, { useContext, useState } from 'react';
import SavedContext from '../store/saved-context';
import FlagModal from './FlagModal';
import Backdrop from './Backdrop';
import HeartOutline from '../assets/heart-outline.svg';
import HeartFilled from '../assets/heart-fill.svg';
import CSSSpinner from './CSSSpinner';
import classes from './CountryCard.module.css';

const Country = props => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const savedCtx = useContext(SavedContext);
  const country = props.country;

  const isSaved = savedCtx.savedCountries.some(countrySaved => {
    return countrySaved.cca3 === country.cca3;
  });

  const saveClickHandler = () => {
    savedCtx.toggleSaved(country);
  };

  const imgLoadHandler = () => {
    console.log('onload fired');
    setImgLoaded(true);
  };

  const showFlagHandler = () => {
    setShowFlagModal(true);
  };

  const hideFlagHandler = () => {
    setShowFlagModal(false);
  };

  return (
    <div className={classes['country-card']}>
      <Backdrop show={showFlagModal} onClick={hideFlagHandler} />
      <FlagModal show={showFlagModal} flagUrl={country.flag} />
      <div className={classes['country-card__flag-container']}>
        <div style={{ display: imgLoaded ? 'none' : 'block' }}>
          <CSSSpinner />
        </div>
        <div style={{ display: imgLoaded ? 'block' : 'none' }}>
          <img
            className={classes['country-card__flag']}
            src={country.flag}
            alt='country flag'
            onClick={showFlagHandler}
            onLoad={imgLoadHandler}
          />
        </div>
      </div>

      <ul className={classes['country-card__list-items']}>
        <li className={classes['country-card__list-items--first-col']}>
          <span>Common name: </span>
          <span>{country.commonName}</span>
        </li>
        <li className={classes['country-card__list-items--first-col']}>
          <span>Official name: </span>
          <span>{country.officialName}</span>
        </li>
        <li className={classes['country-card__list-items--first-col']}>
          <span>Region: </span>
          <span>{country.region}</span>
        </li>
        <li className={classes['country-card__list-items--first-col']}>
          <span>Subregion: </span>
          <span>{country.subregion}</span>
        </li>
        <li className={classes['country-card__list-items--first-col']}>
          <span>Languages: </span>
          <span>{country.languages} </span>
        </li>
        <li className={classes['country-card__list-items--second-col']}>
          <span>Capital: </span>
          <span>{country.capital}</span>
        </li>
        <li className={classes['country-card__list-items--second-col']}>
          <span>Currency: </span>
          <span>{country.currency}</span>
        </li>
        <li className={classes['country-card__list-items--second-col']}>
          <span>Area: </span>
          <span>{country.area}</span>
        </li>
        <li className={classes['country-card__list-items--second-col']}>
          <span>Population: </span>
          <span>{country.population}</span>
        </li>
      </ul>
      <div className={classes['country-card__actions']}>
        <a
          className={classes['country-card__btn']}
          href={country.maps}
          target='_blank'
          rel='noreferrer'
        >
          View on Maps
        </a>
        <div className={classes['country-card__save-container']}>
          <button
            className={classes['country-card__save']}
            type='button'
            onClick={saveClickHandler}
          >
            <img
              draggable='false'
              onContextMenu={e => e.preventDefault()}
              src={isSaved ? HeartFilled : HeartOutline}
              alt='save icon'
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;

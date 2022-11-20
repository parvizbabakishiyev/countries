import React, { useState, useRef } from 'react';
import CountryCard from './CountryCard';
import Message from './Message';
import CSSSpinner from './CSSSpinner';
import SearchIcon from '../assets/search-icon.svg';
import SearchArrowIcon from '../assets/search-arrow-icon.svg';
import classes from './Search.module.css';

const errorInitState = { isError: false, errorText: '' };

const Search = () => {
  const searchRef = useRef('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(errorInitState);

  const searchSubmitHandler = async event => {
    event.preventDefault();
    const enteredValue = searchRef.current.value;

    setIsLoading(true);
    setError(errorInitState);

    // check if user input empty
    if (enteredValue === '') {
      setIsLoading(false);
      setError({ isError: true, errorText: 'Please type something to search' });
      return;
    }

    try {
      const responseData = await fetch(
        `https://restcountries.com/v3.1/name/${enteredValue}`
      );
      const responseJson = await responseData.json();

      // check number of counteries returned in response
      if (responseJson.length > 30) {
        setIsLoading(false);
        setError({
          isError: true,
          errorText: `More than 30 results, please make your\nsearch more specific`,
        });
        event.target.reset();
        return;
      }

      if (responseData.status === 200) {
        // format and get the necessary data from the response
        const formattedData = responseJson.map(country => {
          const countryObject = {};

          // currency
          if (country.currencies) {
            const currencyName = Object.keys(country.currencies)[0];
            const currencyFullName = country.currencies[currencyName].name;
            const currencySymbol = country.currencies[currencyName].symbol;
            countryObject.currency = `${currencyFullName}(${currencySymbol})`;
          } else {
            countryObject.currency = '\u2014';
          }
          const areaInSqMiles = Math.round(
            Number(country.area) * 0.38610215854245
          ).toLocaleString('en-US');

          // capital
          countryObject.capital = country.capital
            ? country.capital[0]
            : '\u2014';

          // languages
          countryObject.languages = country.languages
            ? Object.values(country.languages).join(', ')
            : '\u2014';

          // subregion
          countryObject.subregion = country.subregion
            ? country.subregion
            : '\u2014';

          countryObject.flag = country.flags.svg;
          countryObject.commonName = country.name.common;
          countryObject.officialName = country.name.official;
          countryObject.region = country.region;
          countryObject.area = `${country.area.toLocaleString(
            'en-US'
          )} km\u00B2 (${areaInSqMiles} mi\u00B2)`;
          countryObject.population = country.population.toLocaleString('en-US');
          countryObject.maps = country.maps.googleMaps;
          countryObject.cca3 = country.cca3;

          return countryObject;
        });
        setCountries(formattedData);
        setIsLoading(false);
      } else if (responseData.status === 404) {
        setIsLoading(false);
        setError({ isError: true, errorText: 'No countries found' });
      } else {
        setIsLoading(false);
        setError({ isError: true, errorText: 'Failed to get the info' });
      }
    } catch (err) {
      setIsLoading(false);
      setError({ isError: true, errorText: 'Something went wrong' });
    }
    event.target.reset();
  };

  return (
    <React.Fragment>
      <form onSubmit={searchSubmitHandler} className={classes.search}>
        <img
          draggable='false'
          onContextMenu={e => e.preventDefault()}
          className={classes['search__icon']}
          src={SearchIcon}
          alt='search icon'
        />
        <input
          ref={searchRef}
          className={classes.search__input}
          type='text'
          name='search'
          placeholder='Search'
          autoComplete='off'
        />
        <button className={classes.search__button} type='submit'>
          <img
            draggable='false'
            onContextMenu={e => e.preventDefault()}
            src={SearchArrowIcon}
            alt='arrow icon'
          />
        </button>
      </form>
      {isLoading && <CSSSpinner className={classes.search__spinner} />}
      {error.isError && <Message messageText={error.errorText} />}
      {!isLoading &&
        !error.isError &&
        countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
    </React.Fragment>
  );
};

export default Search;

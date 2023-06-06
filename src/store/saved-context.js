import React, { useEffect, useState } from 'react';

const SavedContext = React.createContext({
  savedCountries: [],
  toggleSaved: () => {},
  getAllSaved: () => {},
  isSaving: false,
});

export const SavedContextProvider = props => {
  const [savedCountries, setSavedCountries] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    getAllSaved();
  }, []);

  const toggleSaved = async countryInfo => {
    setIsSaving(true);
    const matchedCountry = savedCountries.find(
      country => country.cca3 === countryInfo.cca3
    );
    await new Promise(r => setTimeout(r, 500));

    if (matchedCountry) {
      // remove item
      localStorage.removeItem(countryInfo.cca3);
      setSavedCountries(prevState => {
        const newState = prevState.filter(country => {
          return countryInfo.cca3 !== country.cca3;
        });
        setIsSaving(false);
        return newState;
      });
    } else {
      // add item
      localStorage.setItem(countryInfo.cca3, JSON.stringify(countryInfo));
      setSavedCountries(prevState => {
        const newState = prevState.concat(countryInfo);
        setIsSaving(false);
        return newState;
      });
    }
  };

  const getAllSaved = () => {
    const localData = Object.values(localStorage).map(countryString =>
      JSON.parse(countryString)
    );
    setSavedCountries(localData);
  };

  return (
    <SavedContext.Provider
      value={{ savedCountries, toggleSaved, getAllSaved, isSaving }}
    >
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedContext;

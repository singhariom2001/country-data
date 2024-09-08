
import React, { useState } from 'react';
import styles from './ButtonScreen.module.css';

const countries = [
    {
      name: "South Georgia",
      capital: "King Edward Point",
      region: "Antarctic",
      flag: "https://flagcdn.com/w320/gs.png",
      population:30,
      currencies:"Saint Helena pound"
    },
    {
      name: "Grenada",
      capital: "St. George's",
      region: "Americas",
      flag: "https://flagcdn.com/w320/gd.png",
      population:40,
      currencies:"Saint Helena pound"
    }
    
];

const ButtonScreen = () => {
    const [country, setCountry] = useState(null);
    const [showCurrencies, setShowCurrencies] = useState(false);

    const fetchCountryDetails = () => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        setCountry(randomCountry);
        setShowCurrencies(false);
    };

    const handleFetchCountry = () => {
       
        console.log('Fetching country details...');
        fetchCountryDetails();
    };

    const handleReset = () => {
        
        console.log('Resetting...');
        setCountry(null);
        setShowCurrencies(false);
    };
    const handleToggleCurrencies = () => {
        setShowCurrencies(prev => !prev);
    };

    

    return (
        <div >
            <div className={styles.buttonContainer}>
                <button className={`${styles.button} ${styles.grey}`} onClick={handleFetchCountry}>
                    Fetch Country Details
                </button>
                <button className={`${styles.button} ${styles.green}`} onClick={handleReset}>
                    Reset
                </button>
            </div>

            {country && (
                
                <div className={styles.detailsContainer}>
                    <div className={styles.details}>
                        <div className={styles.detailsText}>Country Name: {country.name}</div>
                        <hr className={styles.separator} />
                        <div className={styles.detailsText2}>Capital: {country.capital}</div>
                        <hr className={styles.separator} />
                        <div className={styles.detailsText2}>Region: {country.region}</div>
                        <hr className={styles.separator} />
                        <div className={styles.populationContainer}>
                             <span>Population</span>
                              <div className={styles.populationBox}>{country.population}</div>
                        </div>
                        <div className={styles.currenciesContainer}>
                        <span className={styles.detailsText2}>currencies: </span>
                            {showCurrencies ? (
                                <div className={styles.showCurrencies}> {country.currencies}</div>
                            ) : (
                                <button className={styles.currenciesButton} onClick={handleToggleCurrencies}>
                                    Show Accepted Currencies
                                </button>
                            )}
                        </div>

                    </div>
                    <div className={styles.flag}>
                      <div className={styles.flagText}>Flag</div>
                        <img src={country.flag} alt={`${country.name} flag`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonScreen;

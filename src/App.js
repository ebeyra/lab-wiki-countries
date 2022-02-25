import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
const axios = require('axios');

function App() {
  const [countryList, setCountryList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((responseFromApi) => {
        setCountryList(responseFromApi.data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countryList={countryList} />}
            />
          </Routes>
          <CountriesList countryList={countryList} />
        </div>
      </div>
    </div>
  );
}

export default App;

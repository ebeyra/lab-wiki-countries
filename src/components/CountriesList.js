import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  // Maybe hooks for later
  //   const [countryList, setCountryList] = React.useState(countries);

  let listOfCountries = props.countryList.map((country) => {
    return (
      <Link to={`/${country.alpha3Code}`}>
        <div className="list-group-item list-group-item-action">
          {country.name.common}
        </div>
      </Link>
    );
  });

  return (
    <div style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div>{listOfCountries}</div>
    </div>
  );
};

export default CountriesList;

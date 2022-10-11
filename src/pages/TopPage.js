import React from 'react';
import Results from '../components/Results';
import Selector from '../components/Selector';
import Title from '../components/Title';

const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <Title />
      <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Results countryData={props.countryData} />
    </div>
  );
};

export default TopPage;

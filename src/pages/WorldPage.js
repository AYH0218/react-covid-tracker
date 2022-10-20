import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Title from '../components/Title';

const WorldPage = (props) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Cards allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;

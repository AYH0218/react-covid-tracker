import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Title from '../components/Title';
import { WorldPageType } from '../types';

const WorldPage = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Cards allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;

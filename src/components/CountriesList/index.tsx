import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner';
import './index.scss';

const CountriesList: React.FC = () => {
  const { countries, loading, error } = useTypedSelector(
    (state) => state.countries
  );
  const { fetchCountries } = useActions();

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <h1>{error}</h1>;
  console.log('render')


  return (
    <div>
    {countries.map((country, idx) => (
      <div key={idx}>
        <img src={country.flags.png} alt={country.name} className="country_img"/>
        <h3 className='country_title'>{country.name}</h3>
      </div>
    ))}
  </div>
  );
};

export default CountriesList;

import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchCountries } from '../store/actions/countriesAction';

const CountriesList: React.FC = () => {
  const { countries, loading, error } = useTypedSelector(
    (state) => state.counties,
  );
  const { fetchCountries } = useActions();

  useEffect(() => {
    fetchCountries();
  }, []);
  if (loading) return <h1>Идет загрузка</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {countries.map((country) => (
        <div key={country.id}>{country.name}</div>
      ))}
    </div>
  );
};

export default CountriesList;

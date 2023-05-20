import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountries } from "../../store/actions/countryActions";
import CountryCard from "../../components/CountryCard";

import { Spinner } from "../../components/Spinner";
import "./index.scss";
import Search from "../../components/Search";


const CountriesList = () => {
  const { loading, countries, error } = useAppSelector(
    (state) => state.country
  );

  const dispatch = useAppDispatch();
  console.log("render");

 
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div>

      <Search />
    
      <div className="country">
        {countries.map((country, idx: number) => (
          <CountryCard country={country} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;

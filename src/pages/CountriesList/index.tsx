import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountries } from "../../store/actions/countryActions";
import { Spinner } from "../../components/Spinner";
import "./index.scss";
import CountryCard from "../../components/CountryCard";
import Controls from "../../components/Controls";

const CountriesList = () => {
  const { loading, countries, error } = useAppSelector(
    (state) => state.country
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  return (
    <div>
      <Controls />
      <div className="country">
        {countries.map((country, idx: number) => (
          <CountryCard country={country} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;

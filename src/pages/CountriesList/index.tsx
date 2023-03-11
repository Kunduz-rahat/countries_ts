import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "../../components/Spinner";
import "./index.scss";
import { Link } from "react-router-dom";

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
  console.log("render");

  return (
    <div className="country">
      {countries.map((country, idx) => (
        <Link key={idx} className='country_card' to={`/:${country.id}`}>
          <img
            src={country.flags.png}
            alt={country.name}
            className="country_img"
          />
          <h3 className="country_title">{country.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;

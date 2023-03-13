import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "../../components/Spinner";
import "./index.scss";


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
      {countries.map((c:any, idx:number) => (
        <Link key={idx} className='country_card' to={`/${c.name}`}>
          <img
            src={c.flags.png}
            alt={c.name}
            className="country_img"
          />
          <h3 className="country_title">{c.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;

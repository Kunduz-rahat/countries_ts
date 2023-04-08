import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountries } from "../../store/actions/countryActions";
import { Spinner } from "../../components/Spinner";
import "./index.scss";
import CountryCard from "../../components/CountryCard";


const CountriesList = () => {
  const { loading, countries, error } = useAppSelector(
    (state) => state.country
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;
  return (
    <div className="country">
      {countries.map((country, idx: number) => (
        // <Link key={idx} className="country_card" to={`/${c.name}`}>
        //   <img src={c.flags.png} alt={c.name} className="country_img" />
        //   <h3 className="country_title">{c.name}</h3>
        // </Link>
        <CountryCard country={country} key={idx}/>
      ))}
    </div>
  );
};

export default CountriesList;

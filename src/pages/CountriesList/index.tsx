import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Spinner } from "../../components/Spinner";
import "./index.scss";
import { useAppDispatch } from "../../hooks/redux";
import { fetchCountries } from "../../store/actions/countryActions";


const CountriesList = () => {
  
const dispatch = useAppDispatch()

useEffect(()=>{
  dispatch(fetchCountries())
}, [])
  return (
    <div className="country">
      {/* {countries.map((c:any, idx:number) => (
        <Link key={idx} className='country_card' to={`/${c.name}`}>
          <img
            src={c.flags.png}
            alt={c.name}
            className="country_img"
          />
          <h3 className="country_title">{c.name}</h3>
        </Link>
      ))} */}
    </div>
  );
};

export default CountriesList;

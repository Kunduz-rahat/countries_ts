import { Link } from "react-router-dom";
import { ICountry } from "../../types/models";
import "./index.scss";
import axios from "axios";
import { useState } from "react";

interface CountryCardProps {
  country: ICountry;
}
const CountryCard = ({ country }: CountryCardProps) => {


  return (
    <div>
      <Link className="country_card" to={`/${country.name}`}>
        <img
          src={country.flags.png}
          alt={country.name}
          className="country_img"
        />
        <h3 className="country_title">{country.name}</h3>
      </Link>
    </div>
  );
};

export default CountryCard;

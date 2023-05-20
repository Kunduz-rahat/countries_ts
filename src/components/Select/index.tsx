import React, { useEffect } from "react";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ICountry } from "../../types/models";

const Select = () => {
  const params = useParams();
  const options = [
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Africa", label: "Africa" },
    { value: "Oceania", label: "Oceania" },
  ];

  async function filterByRegion() {
    const res = await axios<ICountry[]>(
      `https://restcountries.com/v2/region/${params}`
    );
    let searchCountry = [...res.data];

    console.log(searchCountry);
  }

  useEffect(() => {
    filterByRegion();
  }, [params]);

  return (
    <select onChange={e=> e.target.value}>
      <option disabled={true}>Поиск по </option>
      {options.map((option) => (
    
<option key={option.value} value={option.value.toLowerCase()}>{option.value}</option>

       
        
     
      ))}
    </select>
  );
};

export default Select;

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {  filterCountriesByAmerica} from "../store/actions/filterActions";
import { Spinner } from "../components/Spinner";
import CountryCard from "../components/CountryCard";

export default function CountriesByAmericas() {
    
    const { loading, region, error } = useAppSelector(
        (state) => state.filter
      );
    
      const dispatch = useAppDispatch();
      console.log("render");
    
     
      useEffect(() => {
        dispatch(filterCountriesByAmerica());
      }, [dispatch]);
    
      if (loading) return <Spinner />;
    
      if (error) return <p className="text-red-500 text-center">{error}</p>;
    
  return <div className="country">
  {region.map((country, idx: number) => (
    <CountryCard country={country} key={idx} />
  ))}
</div>
}

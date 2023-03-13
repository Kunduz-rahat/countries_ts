import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./index.scss";

export const CountryInfo: React.FC = () => {
  const { country, loading, error } = useTypedSelector(
    (state) => state.country
  );
  console.log(country);
  const { name }: any = useParams<{ name: string }>();
  const { fetchCountry } = useActions();
  useEffect(() => {
    fetchCountry(name);
  }, []);
  if (loading) return <Spinner />;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
    
    </div>
  );
};

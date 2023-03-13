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
      {country.map((c: any, idx: number) => (
        <div key={idx} className="country_info">
          <div>
            <img src={c.flags.png} alt={c.name} className="country_info_img" />
          </div>
          <div>
            <h3 className="country_info_name">{c.name}</h3>
            <div>
              <b>Popolation:</b>
              <span style={{marginLeft:"10px"}}>{c.population}</span>
            </div>
            <div>
              <b>Region:</b>
              <span style={{marginLeft:"10px"}}>{c.region}</span>
            </div>
            <div>
              <b>Sub region:</b>
              <span style={{marginLeft:"10px"}}>{c.subregion}</span>
            </div>
            <div>
              <b>Capital:</b>
              <span style={{marginLeft:"10px"}}>{c.capital}</span>
            </div>
            <div>
              <b>Top Level Domaion:</b>
              <span style={{marginLeft:"10px"}}>  {c.topLevelDomain}</span>
            </div>
            <div>
              <b>Currency:</b>
              {c.currencies.map((cur: any) => (
                <span style={{marginLeft:"10px"}} key={cur.name}>{cur.name}</span>
              ))}
            </div>
            <div>
              <b>Languages:</b>
              {c.languages.map((l: any) => (
                <span style={{marginLeft:"10px"}} key={l.name}>{l.name}</span>
              ))}
            </div>
            <div>
              <b>Borders:</b>
               {c.borders.map((b: any) => (
                <span style={{marginLeft:"10px"}} key={b}>{b}</span>
              ))}
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
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
            <p>
              Popolation: <span>{c.population.toLocaleString()}</span>
            </p>
            <p>
              Region:<span>{c.region}</span>
            </p>
            <p>
              Sub region: <span>{c.subregion}</span>
            </p>
            <p>
              Capital: <span>{c.capital}</span>
            </p>
            <p>
              Top Level Domaion: <span> {c.topLevelDomain}</span>
            </p>
            <p>
              Currency:{" "}
              {c.currencies.map((cur: any) => (
                <span key={cur.name}>{cur.name}</span>
              ))}
            </p>
            <div>
              {" "}
              {c.languages > 1 ? <b>Languages:</b> : <b>Language:</b>}
              {c.languages.map((l: any) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </div>
            {c.borders && (
              <p>
                Borders:{" "}
                {c.borders?.map((b: any) => (
                  <span key={b}>{b}</span>
                ))}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

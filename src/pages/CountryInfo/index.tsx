import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";

import "./index.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountryDetail } from "../../store/actions/countryDetailActions";

export const CountryInfo: React.FC = () => {
  const params = useParams<'name'>()
  const { loading, country, error } = useAppSelector(
    (state) => state.countryDetail
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountryDetail(params.name!));
  }, [params.name!]);
  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  console.log(country?.region)
  return (
    <div>
      
        {/* <div  className="country_info">
          <div>
            <img src={country?.flags.png} alt={country?.name} className="country_info_img" />
          </div>
          <div>
            <h3 className="country_info_name">{country?.name}</h3>
            <div className="country_area">
              <div>
                <p>
                  Popolation: <span>{country?.population.toLocaleString()}</span>
                </p>
                <p>
                  Region:<span>{country?.region}</span>
                </p>
                <p>
                  Sub region: <span>{country?.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country?.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domaion: <span> {country?.topLevelDomain}</span>
                </p>
                <p>
                  Currency:
                  {country?.currencies.map((cur: any) => (
                    <span key={cur.name}>{cur.name}</span>
                  ))}
                </p>
                <div>
                  {" "}
                   <b>Languages:</b> 
                  {country?.languages.map((l: any) => (
                    <span key={l.name}>{l.name}</span>
                  ))}
                </div>
              </div>
            </div>

            {country?.borders && (
              <div className="border_title">
                Border Countries:{" "}
                <div className="borders">
                  {country?.borders?.map((b: any) => (
                    <p className="borders_item" key={b}>
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
   */}
      country info
    </div>
  );
};

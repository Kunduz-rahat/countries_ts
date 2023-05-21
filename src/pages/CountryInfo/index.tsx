import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountryDetail} from "../../store/actions/countryDetailActions";
import { Spinner } from "../../components/Spinner";
import "./index.scss";
import axios from "axios";
import { ICountry } from "../../types/models";



export const CountryInfo: React.FC = () => {
  const params = useParams<"name">();
  const code = useParams<"alpha2Code">();
  const dispatch = useAppDispatch();
  const [cByCode, setCByCode] = useState({})
  const { loading, country, error } = useAppSelector(
    (state) => state.countryDetail
  );
  async function countryByCode() {
    const res = await axios<ICountry[]>(
      `https://restcountries.com/v2/name/${code}`
    );
    let searchCountry = [...res.data];
console.log(searchCountry)
    setCByCode(searchCountry);
  }

  useEffect(() => {
    dispatch(fetchCountryDetail(params.name!));
  }, [dispatch, params.name]);



  if (loading ) return <Spinner />;

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div
      style={{
        backgroundImage: `  linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)),url(${country?.flags?.png} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        padding: "0",
      }}
    >
      {country && (
        <div className="country_info">
          <div>
            <img
              src={country?.flags?.png}
              alt={country?.name}
              className="country_info_img"
            />
          </div>
          <div>
            <h1 className="country_info_name">{country?.name}</h1>
            <div className="country_area">
              <div>
                <p>
                  Popolation:{" "}
                  <span>{country?.population?.toLocaleString()}</span>
                </p>
                <p>
                  Region:<span>{country?.region}</span>
                </p>
                <p>
                  Sub region: <span>{country?.subregion}</span>
                </p>
                {country?.capital && (
                  <p>
                    Capital: <span>{country?.capital}</span>
                  </p>
                )}
              </div>
              <div>
                <p>
                  Top Level Domaion: <span> {country?.topLevelDomain}</span>
                </p>
                {country?.currencies && (
                  <p>
                    Currency:
                    {country?.currencies.map((cur: any) => (
                      <span key={cur.name}>{cur.name}</span>
                    ))}
                  </p>
                )}
                {country?.languages && (
                  <p>
                    Language:
                    {country?.languages.map((cur: any) => (
                      <span key={cur.name}>{cur.name}</span>
                    ))}
                  </p>
                )}
                <div></div>
              </div>
            </div>

            {country?.borders && (
              <div className="border_title">
                Border Countries:{" "}
                <div className="borders">
                  {country?.borders?.map((b: any) => (
                    <Link to={`/${cByCode}`}>
                    <p className="borders_item" key={b}>
                      {b}
                    </p>
                    </Link>
                    
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

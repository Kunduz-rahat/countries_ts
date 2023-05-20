import { useEffect, useState } from "react";
import { useInput } from "../../hooks/input";
import { IoSearch } from "react-icons/io5";
import "./index.scss";
import useDebounce from "../../hooks/debounce";
import { ICountry } from "../../types/models";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const input = useInput("");
  const [results, setResults] = useState<ICountry[]>([]);
  const debounted = useDebounce<string>(input.value, 400);
  const [dropDown, setDropDown] = useState(false);
  async function searchCountries() {
    const res = await axios<ICountry[]>(
      `https://restcountries.com/v2/name/${debounted}`
    );
    let searchCountry = [...res.data];

    setResults(searchCountry);
  }

  useEffect(() => {
    if (debounted.length > 3) {
      searchCountries().then(() => setDropDown(true));
    } else {
      setDropDown(false);
    }
  }, [debounted]);

  return (
    <div className="search_container">
      <div className="search">
        <IoSearch />
        <input
          className="search_input"
          placeholder="Search ..."
          type="text"
          {...input}
        />
      </div>
      {
        dropDown && <div className="search_countries">
        {results.map((c) => (
          <Link to={`/${c.name}`} key={c.name}>
            {c.name}
          </Link>
        ))}
      </div>
      }
      
    </div>
  );
}

export default Search;

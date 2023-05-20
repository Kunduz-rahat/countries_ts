import { useEffect } from "react";
import { useInput } from "../../hooks/input";
import { IoSearch } from "react-icons/io5";
import "./index.scss";
import useDebounce from "../../hooks/debounce";
import { ICountry } from "../../types/models";
import axios from "axios";
import { ALL_COUNTRIES } from "../../api/config";

function Search() {
  const input = useInput("");

  const debounted = useDebounce<string>(input.value, 400);

  // const [results, setResults] = useState<ICountry[]>([]);
  // const [dropdown, setDropdown] = useState(false);

  async function searchCountries() {
    const res = await axios<ICountry[]>(
      `https://restcountries.com/v2/name/${debounted}`
    );
let searchCountry = [...res.data]

    console.log(searchCountry);
  }

  useEffect(() => {
    if (debounted.length > 3) {
      searchCountries();
    }
    console.log(input.value);
  }, [debounted]);

  // function renderDropdown() {
  //   if (results.length === 0) {
  //     return <p> No results</p>;
  //   }
  //   return results.map((country) => <div>{country.name}</div>);
  // }

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
      {/* <div className="search_countries">

      </div> */}
    </div>
  );
}

export default Search;

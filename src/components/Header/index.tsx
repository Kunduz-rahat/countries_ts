import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {

  return (
    <header className="header">
      <Link to={"/"}>
        <h1>Where in the World?</h1>
      </Link>
      <div style={{display:'flex'}}>
        <div>
          <NavLink to={"/asia"}>Asia</NavLink>
        </div>
        <div>
          <NavLink to={"/europe"}>Europe</NavLink>
        </div>
        <div>
          <NavLink to={"/africa"}>Africa</NavLink>
        </div>
        <div>
          <NavLink to={"/americas"}>Americas</NavLink>
        </div>
        <div>
          <NavLink to={"/oceania"}>Oceania</NavLink>
        </div>
        <div>
          <NavLink to={"/polar"}>Polar</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

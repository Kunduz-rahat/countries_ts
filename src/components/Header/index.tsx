import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import "./index.scss";
const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "Dark" : "L ight");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>Where in the World?</h1>
      </Link>
      <div>
        
        
            <NavLink to={'/asia'}>Asia</NavLink>
          
            <NavLink to={'/europe'}>Europe</NavLink>
            <NavLink to={'/africa'}>Africa</NavLink>
            <NavLink to={'/americas'}>Americas</NavLink>
            <NavLink to={'/oceania'}>Oceania</NavLink>
            <NavLink to={'/polar'}>Polar</NavLink>
      </div>
    
    </header>
  );
};

export default Header; 

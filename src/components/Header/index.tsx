import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

      <p onClick={toggleTheme}> {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} mode</span></p>
    </header>
  );
};

export default Header; 

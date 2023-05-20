import React from "react";
import Search from "../Search";
import "./index.scss";
import Select from "../Select";
const Controls = () => {
  const options = [
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Africa", label: "Africa" },
    { value: "Oceania", label: "Oceania" },
  ];
  return (
    <div className="controls">
      <Search />
      <Select  />
    </div>
  );
};

export default Controls;

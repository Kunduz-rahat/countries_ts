import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";

import Header from "./components/Header";
import { CountryInfo } from "./pages/CountryInfo";
import CountriesByAsia from "./pages/CountriesByAsia";
import CountriesByEurope from "./pages/CountriesByEurope";

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/asia" element={<CountriesByAsia />} />
        <Route path="/europe" element={<CountriesByEurope />} />
        <Route path="/:name" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

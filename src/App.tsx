import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";

import Header from "./components/Header";
import { CountryInfo } from "./pages/CountryInfo";
import CountriesByAsia from "./pages/CountriesByAsia";
import CountriesByEurope from "./pages/CountriesByEurope";
import CountriesByAfrica from "./pages/CountriesByAfrica";
import CountriesByAmericas from "./pages/CountriesByAmericas";

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/asia" element={<CountriesByAsia />} />
        <Route path="/europe" element={<CountriesByEurope />} />
        <Route path="/africa" element={<CountriesByAfrica />} />
        <Route path="/americas" element={<CountriesByAmericas />} />
        <Route path="/:name" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from './pages/CountriesList';

import Header from './components/Header';
import { CountryInfo } from './pages/CountryInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:name" element={<CountryInfo />} />
      
      </Routes>
    </BrowserRouter>
  );
};

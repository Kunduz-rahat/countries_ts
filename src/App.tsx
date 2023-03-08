import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Header from './components/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </BrowserRouter>
  );
};

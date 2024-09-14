import React, { useState } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import countries from './Countries.json';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCountries = countries.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      
      <h1 style={{color:"royalblue"}}>Country Information</h1>
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={searchTerm}
        style={{color:"blueviolet"}}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {searchTerm && (
        <div className="country-grid">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          ) : (
            <p>No countries found.</p>
          )}
        </div>
      )}
    </div>
  );
}
export default App;

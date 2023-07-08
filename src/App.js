import React, { useState, useEffect } from 'react';
import Map from './Map';
import './styles.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [dateInputVisible, setDateInputVisible] = useState(false);

  const handleFilterTypeChange = (e) => {
    const selectedFilterType = e.target.value;
    setFilterType(selectedFilterType);
    setDateInputVisible(selectedFilterType === 'Hotels');
  };

  const handleFilterValueChange = (e) => {
    const selectedFilterValue = e.target.value;
    setFilterValue(selectedFilterValue);
  };

  const fetchData = async () => {
    try {
      const apiUrl = `https://api.travel-advisor.p.rapidapi.com/path/to/endpoint?filterType=${filterType}&filterValue=${filterValue}`;

      const response = await fetch(apiUrl, {
        headers: {
          'x-rapidapi-key': 'api_25f88380-bfc2-4f1e-9026-fbb5b0e663cd',
          'x-rapidapi-host': 'api.travel-advisor.p.rapidapi.com',
        },
      });

      const data = await response.json();
      setLocations(data.results);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterType, filterValue]);

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <button className="enter-dates-button">Enter Dates</button>
          <div className="search-bar">
            {/* Add your search bar component here */}
          </div>
        </div>
        <div className="navbar-right">
          <button className="filters-button">Filters</button>
          <button className="attractions-button">Attractions</button>
        </div>
      </header>
      <div className="content">
        <div className="left-pane">
          Tower of London
          {/* Add your pictures and names of places here */}
        </div>
        <div className="right-pane">
          <Map locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default App;

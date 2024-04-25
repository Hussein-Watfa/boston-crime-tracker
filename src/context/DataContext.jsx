import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [markers, setMarkers] = useState([]);
  const [results, setResults] = useState([]);

  const updateData = (option) => {
    setSelectedOption(option);
    // TODO: Make an API call based on the selected option and update markers and results
    // For now, you can set some dummy data
    setMarkers([
      { lat: 42.3601, lng: -71.0589 },
      { lat: 42.3331, lng: -71.0897 },
      { lat: 42.3772, lng: -71.1167 },
    ]);
    setResults([
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      { id: 3, name: 'Result 3' },
      { id: 4, name: 'Result 4' },
      { id: 5, name: 'Result 5' },
    ]);
  };

  return (
    <DataContext.Provider value={{ selectedOption, markers, results, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
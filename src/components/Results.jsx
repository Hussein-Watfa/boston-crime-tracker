import React, { useContext } from 'react';
import './Results.css';
import { DataContext } from '../context/DataContext';

export default function Results() {
  const { results } = useContext(DataContext);

  return (
    <div className="Results">
      <div className = "Results-container" >
      <h2 className="text-Results">5 Most Recent Cases</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}
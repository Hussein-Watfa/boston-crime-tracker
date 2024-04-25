import React, { useContext, useEffect } from 'react'
import './BostonMap.css'
import { DataContext } from '../context/DataContext';

const cases = [
    { name: 'Case 1', color: '#FFB3B3' },
    { name: 'Case 2', color: '#FF8080' },
    { name: 'Case 3', color: '#FF4D4D' },
    { name: 'Case 4', color: '#FF1A1A' },
    { name: 'Case 5', color: '#E60000' },
    { name: 'Case 6', color: '#B30000' },
    { name: 'Case 7', color: '#800000' },
  ];

export default function Legend() {

    const { updateData } = useContext(DataContext);

    const handleOptionChange = (event) => {
        updateData(event.target.value);
    };

    useEffect(() => {
        // Load the default data when the component mounts
        updateData('option1');
      }, [updateData]);

  return (
    <div className = "Legend">
        <div className = "Legend-content">
            <h2>Legend</h2>
            <ul className="Legend-key">
                {cases.map((caseItem, index) => (
                    <li key={index}>
                        <span
                            className="Legend-color"
                            style={{ backgroundColor: caseItem.color }}
                        ></span>
                    {caseItem.name}
                </li>
                ))}
            </ul>
            <select className="Legend-dropdown" onChange = {handleOptionChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
                <option value="option6">Option 6</option>
                <option value="option7">Option 7</option>
            </select>
        </div>
    </div>
  )
}

import React from 'react'
import './BostonMap.css'

const cases = [
    { name: 'Case 1', color: '#FF0000' },
    { name: 'Case 2', color: '#00FF00' },
    { name: 'Case 3', color: '#0000FF' },
    { name: 'Case 4', color: '#FFFF00' },
    { name: 'Case 5', color: '#A020F0' },
    { name: 'Case 6', color: '#FFA500' },
    { name: 'Case 7', color: '#FFC0CB' },
];

export default function Legend() {
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
            <select className="Legend-dropdown">
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

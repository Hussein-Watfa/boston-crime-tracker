import React from 'react'
import './BostonMap.css'
import InteractiveMap from './InteractiveMap';

export default function BostonMap() {
  return (
    <div className = "BostonMap">
        <InteractiveMap/>

        <div className = "Legend">
        <select className="Legend-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
        </div>
    </div>
  )
}
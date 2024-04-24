import React from 'react'
import './BostonMap.css'
import InteractiveMap from './InteractiveMap';
import Legend from './Legend';

export default function BostonMap() {
  return (
    <div className = "BostonMap">
        <InteractiveMap/>
        <Legend/>
    </div>
  )
}
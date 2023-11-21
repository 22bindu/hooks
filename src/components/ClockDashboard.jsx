import React from 'react'
import Citytime from './Citytime'

export default function ClockDashboard() {
    const cities =[
        {
            name: "New York",
            timezone: "America/New_York"   
        },
        {
            name: "India",
            timezone: "Asia/Kolkata"
        },
        {
            name: "Australia",
            timezone: "Australia/Sydney"
        },
        {
            name: "United Kingdom",
            timezone: "Europe/London"

        }
    ];
  return (
    <div className='App-header App-link'>
        <h1>ClockDashboard</h1>
        <ul >
          {
        cities.map((city , index)=>(
            <Citytime city={city} key={index}/>
        ))}

        </ul>

    </div>
    
  )
}

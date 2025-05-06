import React from 'react';
import './homepage.css'; 

export default function HomePage() {
    return (
        <div className="homepage">
            <h1 className='heading'>Welcome To Perosonal Finance Tracker</h1>
            <div className="dest-input-div">
                <h2>Enter your Salary</h2>
                <div className="extra-div">
                    <input type="text" placeholder="Enter your Salary" className='dest-input'/>
                    <button className='dest-search-btn'>Search</button>
                </div>
            </div>
        </div>
    )
}
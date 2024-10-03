import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to= "/">WATCH LIST</Link>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to="/wish-list">WISH LIST</Link>
                    </li>
                    <li>
                        <Link to="/watched">ALREADY WATCHED</Link>
                    </li>
                    <li>
                        <Link to ="/add" className="btn">+ADD</Link>
                    </li>
                </ul>
            </div>
        </div>
        



    </header>
  )
};

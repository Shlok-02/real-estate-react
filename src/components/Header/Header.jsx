import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <>
       <div className="header">
        <div className="main-header">
                <div className="left-nav">
                    <h1><span>SG</span> Real Estates</h1>
                </div>
                <div className="right-nav">
                    <ul className="lists">
                        <li><Link to="/rent">Rent a Property</Link></li>
                        <li><Link to="/buy">Buy a Property</Link></li>
                    </ul>
                </div>
            </div>
       </div>
    </>
  )
}

export default Header
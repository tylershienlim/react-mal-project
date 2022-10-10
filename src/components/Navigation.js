import React from 'react'
import { NavLink } from "react-router-dom";
import Footer from './Footer';

function Navigation() {
  return (
    <div className='nav-wrap'>
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
              <header><strong>Tyler's</strong> MAL 2.0</header>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/TopAiring">
                    Top Seasonal Anime
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Search">
                    Search Anime
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Watch">
                    Watch Anime
                  </NavLink>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
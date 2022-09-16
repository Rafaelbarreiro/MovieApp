import React from 'react';
import { NavLink } from 'react-router-dom';
//import Logo from '../../logoHenry.png'

import './Navbar.css';

//header nos permite navegar por las router
export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <h2>RafaelB MoviesApp</h2>
             {/*    <img cassName="img" src='https://i.ytimg.com/vi/dWdF23kWSU4/maxresdefault.jpg' alt="img not found" /> */}
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
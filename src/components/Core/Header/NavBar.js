import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar">
            <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                <i class="fa fa-bars"></i>
            </label>
            <Link class="logo">logo</Link>
            <input type="checkbox" id="chkToggle"></input>
            <ul class="main-nav" id="js-menu">
            <li>
                <Link class="nav-links">Home</Link>
            </li>
            </ul>
        </nav>
    )
}

export default NavBar;

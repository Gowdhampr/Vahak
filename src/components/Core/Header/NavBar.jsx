import React from 'react';

// Assets
import UserAvatar from "../../../assets/ProfileAvatarSmall.png";
import Hamburger from "../../../assets/hamburger.png";
import HondaLogo from "../../../assets/hondaLogo.png";

const NavBar = () => {
    return (
        <nav class="navbar">
            <img className="logo" alt="" src={Hamburger} style={{height: "40px"}} />
            <img className="logo" alt="" src={HondaLogo} style={{height: "60px"}} />
            <img className="userAvatar" alt="" src={UserAvatar} style={{height: "40px"}} />
            <input type="checkbox" id="chkToggle"></input>
        </nav>
    )
}

export default NavBar;

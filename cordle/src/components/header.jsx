import React from "react";
import Logo from "./logo";
import cs2logo from "../assets/cs2logo.png";
import pointdown from "../assets/pointdown.png";

function Header() {
    return(
    <div id="header" className="flex-ai">
        <Logo />
        <div id="cs2section" className="flex-ai">
            <img src={cs2logo} alt="CS2 Logo" height="30px" width="30px" />
            <h3>CS2</h3>
            <img src={pointdown} alt="Point down" height="30px" width="30px"/>
        </div>
        <h3 id="game">GUESS THE PLAYER</h3>
    </div>
    ); 
}

export default Header;
import React from "react";
import Logo from "./logo";
import Copyright from "./copyright";
import SMLink from "./smlink";

function Footer() {
    return(
        <div id="footer" className="flex-ai">
            <div className="flex-ai">
                <Logo />
                <Copyright />
            </div>
            <div id="sm-links" className="flex-ai">
                <SMLink smname="Instagram" link="https://www.instagram.com/bogdanpet_/" />
                <SMLink smname="Twitter" link="https://x.com/Gibo_BP" />
                <SMLink smname="GitHub" link="https://github.com/bogdddann" />
            </div>
        </div>
        ); 
}

export default Footer;
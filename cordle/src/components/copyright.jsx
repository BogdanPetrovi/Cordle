import React from "react";

function Copyright(){ 
    const d = new Date();
    const year = d.getFullYear();

    return(
        <h3>Copyright@{year}</h3>
    )
}

export default Copyright;
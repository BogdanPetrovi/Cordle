import React from "react";

function SMLink(props){
    return(
        <a href={props.link} target="_blank" style={{textDecoration:"none"}}><h4>{props.smname}</h4></a>
    );
}

export default SMLink;
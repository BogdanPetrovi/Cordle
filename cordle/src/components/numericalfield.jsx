import React from "react";

function NumericalField(props) {
    const name = props.name;

    return (
        <div id={props.id} className="field">
            <div className="content-part">
                <h4>{props.title}</h4>
            </div>
            <div className="guess-part">
            { props.content.length > 0 ? props.content.map((item, index) => (
                props.rightGuess === item[name] ? 
                (<h3 className="right-guess" key={index}>{item[name]}</h3>)
                : ( props.rightGuess > item[name] ? 
                    (<h3 key={index}>{item[name]}&#8593;</h3>) 
                    : (<h3 key={index}>{item[name]}&#8595;</h3>) 
                )
            )) : null}
        </div>
        </div>
    )
}

export default NumericalField;
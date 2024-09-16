import React from "react";
import Field from "./field";
import NumericalField from "./numericalfield";

function Guesses(props) {
    return (
    <div id="guesess">
        <Field id="nick-field" title="Nickname" content={props.guessedPlayers} name="nickname" rightGuess={props.rightPlayer.nickname}/>
        <Field id="nat-field" title="Nationality" content={props.guessedPlayers} name="nationality" rightGuess={props.rightPlayer.nationality} continent={props.rightPlayer.continent} />
        <NumericalField id="age-field" title="Age" content={props.guessedPlayers} name="age" rightGuess={props.rightPlayer.age} age={true}/>
        <Field id="team-field" title="Team" content={props.guessedPlayers} name="team" rightGuess={props.rightPlayer.team} />
        <Field id="weapon-field" title="Weapon" content={props.guessedPlayers} name="weapon" rightGuess={props.rightPlayer.weapon} />
        <NumericalField id="first-team-field" title="Years since first team" content={props.guessedPlayers} name="yearssincefirstteam" rightGuess={props.rightPlayer.yearssincefirstteam} />
    </div>)
}

export default Guesses;
import React, {useRef, useState} from "react";

function Form(props) {
    const [player, setPlayer] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const allPlayers = props.allPlayers;
    const listItem = useRef();

    function handleChange(e) {
        setPlayer(e.target.value);
        if(e.target.value !== ""){
            const filteredSuggestions = allPlayers.filter((item) => {
                return item.nickname.toLowerCase().startsWith(e.target.value.toLowerCase());
            });

            setSuggestions(filteredSuggestions);
        } else setSuggestions([])
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.try(player);
        setSuggestions([]);
        setPlayer("");
    }

    function handleClick(suggestion) {
        setPlayer(suggestion);
        listItem.current.focus();
        setSuggestions([]);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="playerguess" id="player-guess-area" autoComplete="off" ref={listItem} value={player} onChange={handleChange} disabled={props.isDisabled}/>
            <ul>
            {suggestions.map((item, index) => (
                    <li key={index} onClick={() => handleClick(item.nickname)}>{item.nickname}</li>
                ))}
            </ul>
            <input type="submit" hidden />
        </form>
    )
}

export default Form;
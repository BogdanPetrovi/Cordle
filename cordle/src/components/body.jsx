import React, { useState } from "react";
import gtp from "../assets/gtp.png";
import Form from "./form";
import Guesses from "./guesses";
import Modal from "./modal";

function Body(props) {
    const secretPlayer = props.randomPlayer;
    const [data, setData] = useState(props.data);
    const [guessedPlayers, setGuessedPlayers] = useState([]);
    const [guesses, setGuesses] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [rightGuess, setRightGuess] = useState(false);

    function handleTry(info) {
        const result = data.find((player) => player.nickname.toLowerCase() === info.toLowerCase());
        if(result){
            console.log(secretPlayer.nickname);
            if(result.id === secretPlayer.id){
                console.log("well done");
                setRightGuess(true);
                setGameOver(true);
            } else {
                if(guesses >= 7) setGameOver(true);
                else{
                    const dataFiltered = data.filter((item) => (item.id !== result.id));
                    setData(dataFiltered);
                    setGuessedPlayers(prevPlayers => {
                    return [...prevPlayers, result]
                });
                }
                setGuesses(prevGuesses => (prevGuesses+1));
                console.log(guesses);
                console.log(gameOver);
            }
        } else {
            console.log("Not found");
        }
    }

    return(
        <div id="body">
            <Modal open={gameOver} onClose={() => {window.location.reload();}}>
                {rightGuess ? ( <><h3 style={{"color":"#6DDC00"}}>Well done</h3></> ) 
                : ( <><h3 style={{"color":"#F07F7F"}}>Nice try!</h3></> )} 
                <h3>Secret player was <span>{secretPlayer.nickname}</span></h3>
                <h3 style={{fontSize: "20px"}}>Currently playing in <span>{secretPlayer.team}</span></h3>
            </Modal>            
            <div id="gtpdiv">
                <img id="gtp" src={gtp} alt="Guess the player" />
            </div>
            <Form try={handleTry} isDisabled={gameOver} allPlayers={data} />
            <Guesses guessedPlayers={guessedPlayers} rightPlayer={secretPlayer}/>
        </div>
        ); 
}

export default Body;
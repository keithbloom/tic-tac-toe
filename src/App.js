import "./App.css";
import { useState } from "react";
import { checkDraw, checkWinner } from "./utils";

const Tile = ({ state, id, handleClick }) => (
  <div className="Tile" onClick={() => state === "-" && handleClick(id)}>
    {state}
  </div>
);

const Board = ({ checkForWinner }) => {
  const [gameState, setGameState] = useState(() => Array(9).fill("-"));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const handleClick = (id) => {
    const newState = gameState.map((x, i) => (i === id ? currentPlayer : x));
    checkForWinner(newState, currentPlayer);
    setGameState(newState);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <>
      <div className="Board">
        {gameState.map((x, i) => (
          <Tile key={i} state={x} id={i} handleClick={handleClick} />
        ))}
      </div>
      <div className="Stats">
        CurrentPlayer: {currentPlayer}
      </div>
    </>
  );
};

function App() {
  const [showEndState, setShowEndState] = useState(undefined);
  const [gameId, setGameId] = useState(() => Date.now());

  const checkForWinner = (gameBoard, current) => {
    if (checkWinner(gameBoard)) {
      const message = `We have a winner!: ${current}`;
      setShowEndState(message);
    }
    if (checkDraw(gameBoard)) {
      setShowEndState("The game is a draw");
    }
  };

  const newGame = () => {
    setGameId(Date.now());
    setShowEndState(undefined);
  };

  return (
    <div className="App">
      {showEndState ? (
        <div>{showEndState}</div>
      ) : (
        <Board checkForWinner={checkForWinner} key={gameId} />
      )}
      <div class="Controls">
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}
export default App;

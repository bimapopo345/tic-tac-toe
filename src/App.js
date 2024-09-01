import React from "react";
import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import calculateWinner from "./utils/calculateWinner";
import TimeLine from "./components/TimeLine";

const App = () => {
  const [timeLine, setTimeLine] = useState([
    {
      isXNext: false,
      board: Array(9).fill(null),
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const board = timeLine[currentStep].board;

  const isXNext = timeLine[currentStep].isXNext;
  const winner = calculateWinner(board);

  const handleSquareClick = (index) => {
    if (winner) return;

    const newBoard = [...board];
    // console.log(newBoard)
    if (newBoard[index]) {
      return newBoard;
    }
    newBoard[index] = isXNext ? "X" : "O";
    // setIsNext(!isXNext)
    setTimeLine([
      ...timeLine.slice(0, currentStep + 1),
      {
        board: newBoard,
        isXNext: !isXNext,
      },
    ]);
    setCurrentStep(currentStep + 1);
  };

  const handleTimeLineItemClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <GameInfo winner={winner} isXNext={isXNext} />
        <TimeLine
          currentStep={currentStep}
          timeLine={timeLine}
          onTimeLineItemClick={handleTimeLineItemClick}
        />
      </div>
    </div>
  );
};

// create function redux

// function Child(){
//   return React.createElement('i',null,"Nama Saya Bima")
// }

// function App() {
//   return React.createElement('h1', null, ['Halo DUNIA!!, ',Child()])
// }

export default App;

import Square from "./Square";

const Board = ({ board, onAction }) => {
  const handleSquareClick = (index) => {
    onAction(index);
  };
  return (
    <div className="Board">
      <div className="row">
        <Square index={0} onClick={() => handleSquareClick(0)}>
          {board[0]}
        </Square>
        <Square index={1} onClick={() => handleSquareClick(1)}>
          {board[1]}
        </Square>
        <Square index={2} onClick={() => handleSquareClick(2)}>
          {board[2]}
        </Square>
      </div>
      <div className="row">
        <Square index={3} onClick={() => handleSquareClick(3)}>
          {board[3]}
        </Square>
        <Square index={4} onClick={() => handleSquareClick(4)}>
          {board[4]}
        </Square>
        <Square index={5} onClick={() => handleSquareClick(5)}>
          {board[5]}
        </Square>
      </div>
      <div className="row">
        <Square index={6} onClick={() => handleSquareClick(6)}>
          {board[6]}
        </Square>
        <Square index={7} onClick={() => handleSquareClick(7)}>
          {board[7]}
        </Square>
        <Square index={8} onClick={() => handleSquareClick(8)}>
          {board[8]}
        </Square>
      </div>
    </div>
  );
};

export default Board;

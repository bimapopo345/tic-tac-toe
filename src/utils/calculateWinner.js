function calculateWinner(board) {
    // List Down
    const winningCombination = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    // loop thorugh dan bandingkan dengan board state
    for(let i = 0; i<winningCombination.length; i++){
      const [a,b,c] = winningCombination[i]
  
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
  }

  export default calculateWinner
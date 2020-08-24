import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board.js'
import init_pieces from './components/helpers/init_pieces.js'

function App() {

  const [pieces, setPieces] = useState(init_pieces())
  const [selectedSquare, setSelectedSquare] = useState(-1)
  const [player, setPlayer] = useState(2)
  const [clearPossibleMoves, setClearPossibleMoves] = useState([])
  

  console.log(pieces)

  const handleCLickMove = (pos) => {
    // check if selected square is empty square and check if any square was previosuly selected
    if (pieces[pos].player && selectedSquare === -1) { 
        if (pieces[pos].player === player) {

          pieces[pos].style = { ...pieces[pos].style, backgroundColor: "#BB6B00"}
          setSelectedSquare(pos)
      
          const possibleMoves = pieces[pos].possibleMoves(pieces, pos)
          console.log(possibleMoves)
          possibleMoves.map(move => pieces[move].style = { ...pieces[move].style, backgroundColor: "#eb9626"})
          setClearPossibleMoves(possibleMoves)

          // if (player === 2) {
          //   setPlayer(1)
          // } else {
          //   setPlayer(2)
          // }

          return

        } else {

          console.log('It`s your opponent`s turn')
          return
        }
    } else {
       // check if any square is selected
      if (selectedSquare !== -1) {
        pieces[selectedSquare].style = { ...pieces[selectedSquare].style, backgroundColor: ""} // clear bg color of last selected piece
        clearPossibleMoves.map(possibleMove => pieces[possibleMove].style = { ...pieces[possibleMove].style, backgroundColor: "" }) // clear all possible moves of last selected piece
        setSelectedSquare(-1)
      }
    }
  }

  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">

        <div className="col-3">
          INFO
        </div>

        <Board 
          pieces={pieces} 
          handleClick={handleCLickMove}
        />

        <div className="col-3">
          OPTIONS
        </div>

      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Board from './components/Board.js'
import init_pieces from './components/helpers/init_pieces.js'

function App() {

  const [pieces, setPieces] = useState(init_pieces())
  const [selectedPiece, setSelectedPiece] = useState({})
  const [selectedSquare, setSelectedSquare] = useState(-1)
  const [player, setPlayer] = useState(2)
  const [possibleMoves, setPossibleMoves] = useState([])
  

  console.log(pieces)

  const handleCLickMove = (pos) => {
    // check if selected square is empty square and check if any square was previosuly selected
    if (pieces[pos].player && selectedSquare === -1) { 
        if (pieces[pos].player === player) {

          pieces[pos].style = { ...pieces[pos].style, backgroundColor: "#BB6B00"}
          setSelectedSquare(pos)
          setSelectedPiece(pieces[pos])
      
          const moves = pieces[pos].possibleMoves(pieces, pos)
          // console.log(possibleMoves)
          moves.map(move => pieces[move].style = { ...pieces[move].style, backgroundColor: "#eb9626"})
          setPossibleMoves(moves)
        } else {

          console.log('It`s your opponent`s turn')
        }
    } else {
       // check if any square is selected
      if (selectedSquare !== -1) {
        // check if square is correct move
        if (possibleMoves.includes(pieces[pos].key)) {
          // console.log(possibleMoves, pieces[pos])
          updatePieces(pieces[pos].key)
        }

        pieces[selectedSquare].style = { ...pieces[selectedSquare].style, backgroundColor: ""} // clear bg color of last selected piece
        possibleMoves.map(possibleMove => pieces[possibleMove].style = { ...pieces[possibleMove].style, backgroundColor: "" }) // clear all possible moves of last selected piece
        setSelectedSquare(-1)
        setSelectedPiece({})
      }
    }
  }

  const updatePieces = (key) => {
    let newPieces = [...pieces]
    newPieces[key] = selectedPiece
    newPieces[selectedSquare] = {
      style: { backgroundColor: ""},
      key: selectedSquare
    }
    // console.log(newPieces)
    setPieces(newPieces)

    if (player === 2) {
      setPlayer(1)
    } else {
      setPlayer(2)
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

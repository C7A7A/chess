import React, {useState} from 'react';
import './App.css';
import Board from './components/Board.js'
import init_pieces from './components/helpers/init_pieces.js'

function App() {

  const [pieces, setPieces] = useState(init_pieces())
  const [selectedSquare, setSelectedSquare] = useState(-1)
  const [player, setPlayer] = useState(2)

  console.log(pieces)

  const handleCLickMove = (pos) => {
    if (pieces[pos] && selectedSquare === -1) { // check if selected square is null and check if any square was previosuly selected
        if (pieces[pos].player === player) {

          pieces[pos].style = { ...pieces[pos].style, backgroundColor: "#BB6B00"}
          
          setSelectedSquare(pos)

          console.log('Select square to move')
          return

        } else {

          console.log('It`s opponent turn')
          return
        }
    } else {
      if (selectedSquare !== -1) {
        pieces[selectedSquare].style = { ...pieces[selectedSquare].style, backgroundColor: ""} // reset bg color of last selected square
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

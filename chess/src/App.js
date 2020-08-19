import React, {useState} from 'react';
import './App.css';
import Board from './components/Board.js'
import init_pieces from './components/helpers/init_pieces.js'

function App() {

  const [pieces, setPieces] = useState(init_pieces())

  // console.log(pieces)

  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">

        <div className="col-3">
          INFO
        </div>
        
        <Board pieces = {pieces}/>

        <div className="col-3">
          OPTIONS
        </div>

      </div>
    </div>
  );
}

export default App;

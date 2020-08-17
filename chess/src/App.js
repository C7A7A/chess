import React from 'react';
import './App.css';
import Board from './components/Board.js'

function App() {
  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">
        <div className="col-3">
          INFO
        </div>
        <Board/>
        <div className="col-3">
          OPTIONS
        </div>
      </div>
    </div>
  );
}

export default App;

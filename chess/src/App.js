import React, { useState, useEffect, useRef } from 'react'
import './App.css'

import Board from './components/Board.js'
import PlayerInfo from './components/PlayerInfo.js'
import GameOverModal from './components/GameOverModal.js'
import init_pieces from './helpers/init_pieces.js'
import check_are_moves_valid from './helpers/check_are_moves_valid.js'

function App() {

  const [pieces, setPieces] = useState(init_pieces())

  const [selectedPiece, setSelectedPiece] = useState({})
  const [selectedSquare, setSelectedSquare] = useState(-1)
  const [player, setPlayer] = useState(2)
  const [possibleMoves, setPossibleMoves] = useState([])

  const [turn, setTurn] = useState('white')
  
  const openModalRef = useRef(null)
  // console.log(pieces)

  const handleCLickMove = (pos) => {
    // check if selected square is empty and if any piece was previosuly selected
    if (pieces[pos].player && selectedSquare === -1) { 
        if (pieces[pos].player === player) {

          pieces[pos].style = { ...pieces[pos].style, backgroundColor: "#BB6B00"}
          setSelectedSquare(pos)
          setSelectedPiece(pieces[pos])
      
          let moves = pieces[pos].possibleMoves(pieces, pos)
          moves = check_are_moves_valid(pieces, moves, player, pos)
          // console.log(possibleMoves)
          moves.map(move => pieces[move].style = { ...pieces[move].style, backgroundColor: "#eb9626"})
          setPossibleMoves(moves)
        } else {

          console.log('It`s your opponent`s turn')
        }
    } else {
      // check if any square is selected
      if (selectedSquare !== -1) {        
        // check if piece can move to square
        if (possibleMoves.includes(pieces[pos].key)) {
          // console.log(possibleMoves, pieces[pos])
          updatePlayer()
          updatePieces(pieces[pos].key)
          updateTurn()
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

    newPieces[key] = selectedPiece // move selected piece to selected square
    newPieces[key].key = key // change initial key to new key

    // change old square of selected piece to "inactive"
    newPieces[selectedSquare] = {
      style: { backgroundColor: ""},
      key: selectedSquare
    }

    setPieces(newPieces)
  }

  const updatePlayer = () => {
    if (player === 2) {
      setPlayer(1)
    } else {
      setPlayer(2)
    }
  }

  const updateTurn = () => {
    let changeTurn = (turn === 'white') ? 'black' : 'white'
    setTurn(changeTurn)
  }

  useEffect( () => {
    checkStalemate(pieces, player)
  }, [pieces, player])

  const checkStalemate = (pieces, player) => {
    let playerPieces = pieces.filter((piece) => {
      return piece.player && piece.player === player
    })

    let piecesWithAnyMove = playerPieces.filter((piece) => {
      let moves = piece.possibleMoves(pieces, piece.key)
      return (check_are_moves_valid(pieces, moves, player, piece.key)).length > 0
    })

    if (piecesWithAnyMove.length === 0) {
      openModalRef.current.showModal('Draw')
    }    
  }

  return (
    <div className="App container-fluid h-100">
      <div className="row h-100">

        <div className="col-3">
          INFO
        </div>

        <div className="col-6 my-auto">
          <GameOverModal ref={openModalRef}/>
          <PlayerInfo turn={turn} player={1}/>
          <Board 
            pieces={pieces} 
            handleClick={handleCLickMove}
          />
          <PlayerInfo turn={turn} player={2}/>
        </div>

        <div className="col-3">
          OPTIONS
        </div>

      </div>
    </div>
  );
}

export default App;

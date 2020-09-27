import React from 'react'
import Square from './Square.js'

function Board({pieces, handleClick}) {
    const board = []

    for (let i = 0; i < 8; i++) {
        const boardSquares = []
        for (let j = 0; j < 8; j++) {

            boardSquares.push(<Square 
                                key={(i*8) + j} // (i*8) + j = 0, 1 ... 62, 63 
                                number={(i*8) + j} 
                                color={( (i+j) % 2 === 0 ) ? "square_cream" : "square_green"} 
                                piece={pieces[(i*8) + j] ? pieces[(i*8) + j].style : null}
                                onClick={() => {handleClick((i*8) + j)}}
                            />
            )
        }
        
        board.push(<div key={i} className="boardRow row justify-content-center "> {boardSquares} </div>)
    }

    return (
        <div className="board ">
            {board} 
        </div>
    )
}

export default Board

import React from 'react'
// import Field from './Field.js'

function Board() {
    const board = []

    for (let i = 0; i < 8; i++) {
        const boardFields = []
        for (let j = 0; j < 8; j++) {
            boardFields.push(<span key ={i.toString() + j.toString()}> {(i + 1).toString() + (j + 1).toString() + '  '} </span>)
        }
        board.push(<div key={i}> {boardFields} </div>)
    }

    console.log(board.map(field => {
        return field.props
    }))

    return (
        <div>
            {board}
        </div>
    )
}

export default Board

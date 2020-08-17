import React from 'react'
import Field from './Field.js'

function Board() {
    const board = []

    for (let i = 1; i <= 8; i++) {
        const boardFields = []
        for (let j = 1; j <= 8; j++) {
            boardFields.push(<Field key={i*8 + j} number={i.toString() + j.toString()} color={ ( (i+j) % 2 == 0 ) ? "field_cream" : "field_green"} />)
        }
        // var testBoardFieldsMap = boardFields.map(field => field.props.children[1])
        // console.log(testBoardFieldsMap)
        
        board.push(<div key={i} className="boardRow row justify-content-center "> {boardFields} </div>)
    }

    // console.log(board[0].boardFields[0].props.children[1].props.num)
    // console.log(board)

    // var testBoardMap = board.map(
    //     item => {
    //         var square = item.boardFields.map(field => field)
    //         return square
    //     }
    // )

    // console.log(testBoardMap)

    return (
        <div className="board col-6 my-auto ">
            {board} 
        </div>
    )
}

export default Board

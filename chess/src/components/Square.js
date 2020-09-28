import React from 'react'

function Square({number, color, piece, onClick}) {
    const classes=`square ${color}`
    const squareLetters = {
        56: "a",
        57: "b",
        58: "c",
        59: "d",
        60: "e",
        61: "f",
        62: "g",
        63: "h"
    }
    return (
        <div className="square_container">
            <button 
                className={classes} 
                key={number}
                style={piece}
                onClick={onClick}
            >
                {((number % 8) === 0) ? <span className="pos-abs square_number font-weight-bold"> {(number / 8) + 1} </span> : ''}
                {((number >= 56) ? <span className="pos-abs square_letter font-weight-bold"> {squareLetters[number]} </span> : '' )}
            </button>
        </div>
    )
}

export default Square

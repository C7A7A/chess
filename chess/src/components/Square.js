import React from 'react'

function Square({number, color, piece, onClick}) {
    const classes=`square ${color}`
    const squareLetters = {
        56: "A",
        57: "B",
        58: "C",
        59: "D",
        60: "E",
        61: "F",
        62: "G",
        63: "H"
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

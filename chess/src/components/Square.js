import React from 'react'

function Square({number, color, piece, onClick}) {
    const classes=`square ${color}`

    return (
        <button 
            className={classes} 
            key={number}
            style={piece}
            onClick={onClick}
        >
            
        </button>
    )
}

export default Square

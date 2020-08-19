import React from 'react'

function Field({number, color, piece}) {
    const classes=`field ${color}`

    return (
        <button className={classes} 
            key={number}
            style={piece}
        >
            
        </button>
    )
}

export default Field

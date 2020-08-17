import React from 'react'

function Field({number, color}) {
    const classes=`field ${color}`

    return (
        <button className={classes} >
            {number}
        </button>
    )
}

export default Field

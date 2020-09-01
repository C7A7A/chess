import React from 'react'

function PlayerInfo({ player }) {
    return (
        <div className="col-12 m-2">
            <button type="button" className="btn btn-danger mr-1 font-weight-bold button_player"> Surrender </button>
            <button type="button" className="btn btn-info mr-1 font-weight-bold button_player"> Offer Draw </button>
            <span type="button" className="btn btn-light mr-1 font-weight-bold disabled button_player" disabled>Turn - white</span>
        </div>
    )
}

export default PlayerInfo

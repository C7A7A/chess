import React from 'react'
import Piece from './Piece.js'
import BlackKing from './svgImages/black_king.svg'
import WhiteKing from './svgImages/white_king.svg'

class King extends Piece {
    constructor(player) {
        super (player, (player == 1 ?  BlackKing : WhiteKing))
    }
}

export default King

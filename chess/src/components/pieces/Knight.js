import Piece from './Piece.js'
import BlackKnight from './svgImages/black_knight.svg'
import WhiteKnight from './svgImages/white_knight.svg'

class Knight extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackKnight : WhiteKnight))
    }
}

export default Knight

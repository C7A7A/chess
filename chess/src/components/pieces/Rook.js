import Piece from './Piece.js'
import BlackRook from './svgImages/black_rook.svg'
import WhiteRook from './svgImages/white_rook.svg'

class Rook extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackRook : WhiteRook))
    }
}

export default Rook

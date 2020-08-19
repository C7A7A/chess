import Piece from './Piece.js'
import BlackQueen from './svgImages/black_queen.svg'
import WhiteQueen from './svgImages/white_queen.svg'

class Queen extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackQueen : WhiteQueen))
    }
}

export default Queen


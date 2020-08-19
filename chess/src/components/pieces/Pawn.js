import Piece from './Piece.js'
import BlackPawn from './svgImages/black_pawn.svg'
import WhitePawn from './svgImages/white_pawn.svg'

class Pawn extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackPawn : WhitePawn))
    }
}

export default Pawn

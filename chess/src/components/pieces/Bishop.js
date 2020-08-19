import Piece from './Piece.js'
import BlackBishop from './svgImages/black_bishop.svg'
import WhiteBishop from './svgImages/white_bishop.svg'

class Bishop extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackBishop : WhiteBishop))
    }
}

export default Bishop

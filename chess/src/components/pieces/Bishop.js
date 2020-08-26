import Piece from './Piece.js'
import BlackBishop from './svgImages/black_bishop.svg'
import WhiteBishop from './svgImages/white_bishop.svg'
import get_moves_diagonally from '../helpers/get_moves_diagonally.js'

class Bishop extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackBishop : WhiteBishop))
    }

    possibleMoves(pieces, position) {
        const possibleMoves = get_moves_diagonally(position)

        return possibleMoves
    }
}

export default Bishop

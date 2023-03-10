import Piece from './Piece.js'
import BlackBishop from '../../assets/svgImages/black_bishop.svg'
import WhiteBishop from '../../assets/svgImages/white_bishop.svg'
import get_moves_diagonally from '../../helpers/get_moves_diagonally.js'

class Bishop extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackBishop : WhiteBishop), key)
    }

    possibleMoves(pieces, position) {
        const possibleMoves = get_moves_diagonally(pieces, position, this.player)

        return possibleMoves
    }
}

export default Bishop

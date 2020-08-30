import Piece from './Piece.js'
import BlackRook from './svgImages/black_rook.svg'
import WhiteRook from './svgImages/white_rook.svg'
import get_moves_column_row from '../helpers/get_moves_column_row.js'

class Rook extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackRook : WhiteRook), key)
    }

    possibleMoves(pieces, position) {
        const possibleMoves = get_moves_column_row(pieces, position, this.player)

        return possibleMoves
    }
}

export default Rook

import Piece from './Piece.js'
import BlackQueen from '../../assets/svgImages/black_queen.svg'
import WhiteQueen from '../../assets/svgImages/white_queen.svg'
import get_moves_column_row from '../../helpers/get_moves_column_row.js'
import get_moves_diagonally from '../../helpers/get_moves_diagonally.js'

class Queen extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackQueen : WhiteQueen), key)
    }

    possibleMoves(pieces, position) {
        const possibleMoves = []

        possibleMoves.push(...get_moves_column_row(pieces, position, this.player), ...get_moves_diagonally(pieces, position, this.player))

        return possibleMoves
    }
}

export default Queen


import Piece from './Piece.js'
import BlackQueen from './svgImages/black_queen.svg'
import WhiteQueen from './svgImages/white_queen.svg'
import get_moves_column_row from '../helpers/get_moves_column_row.js'
import get_moves_diagonally from '../helpers/get_moves_diagonally.js'

class Queen extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackQueen : WhiteQueen))
    }

    possibleMoves(pieces, position) {
        const possibleMoves = []

        possibleMoves.push(...get_moves_column_row(position), ...get_moves_diagonally(position))

        return possibleMoves
    }
}

export default Queen


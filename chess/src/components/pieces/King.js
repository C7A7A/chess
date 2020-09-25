import Piece from './Piece.js'
import BlackKing from '../../assets/svgImages/black_king.svg'
import WhiteKing from '../../assets/svgImages/white_king.svg'
import get_squares_up_down_left_right from '../../helpers/get_squares_up_down_left_rigt.js'
import remove_squares_with_pieces_on from '../../helpers/remove_squares_with_pieces_on.js'
import get_moves_castling from '../../helpers/get_moves_castling.js'

class King extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackKing : WhiteKing), key)
        this.king = true
        this.initialSquare = true
    }

    possibleMoves(pieces, position) {
        var possibleMoves = []

        const [squaresUp, squaresDown, squaresLeft, squaresRight] = get_squares_up_down_left_right(position)
        
        if (squaresDown !== 0) {
            possibleMoves.push(position + 8)
            if (squaresLeft !== 0) {
                possibleMoves.push(position + 7)
            }
            if (squaresRight !== 0) {
                possibleMoves.push(position + 9)
            }
        }
        if (squaresUp !== 0) {
            possibleMoves.push(position - 8)
            if (squaresLeft !== 0) {
                possibleMoves.push(position - 9)
            }
            if (squaresRight !== 0) {
                possibleMoves.push(position - 7)
            }
        }
        if (squaresRight !== 0) {
            possibleMoves.push(position + 1)
        }
        if (squaresLeft !== 0) {
            possibleMoves.push(position - 1)
        }

        possibleMoves.push(...get_moves_castling(pieces, position, this.player))
        possibleMoves = remove_squares_with_pieces_on(pieces, possibleMoves, this.player)

        return possibleMoves
    }
}

export default King

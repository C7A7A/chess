import Piece from './Piece.js'
import BlackKing from './svgImages/black_king.svg'
import WhiteKing from './svgImages/white_king.svg'
import get_squares_up_down_left_right from '../helpers/get_squares_up_down_left_rigt.js'

class King extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackKing : WhiteKing))
    }

    possibleMoves(pieces, position) {
        const possibleMoves = []

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

        console.log(possibleMoves)
        return possibleMoves
    }
}

export default King

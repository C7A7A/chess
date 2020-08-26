import Piece from './Piece.js'
import BlackKnight from './svgImages/black_knight.svg'
import WhiteKnight from './svgImages/white_knight.svg'
import get_squares_up_down_left_rigt from '../helpers/get_squares_up_down_left_rigt.js'

class Knight extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackKnight : WhiteKnight))
    }

    possibleMoves(pieces, position) {
        const possibleMoves = []

        const [squaresUp, squaresDown, squaresLeft, squaresRight] = get_squares_up_down_left_rigt(position)

        // get moves up
        if (squaresUp >= 2) {
            if (squaresLeft >= 1) {
                possibleMoves.push(position - 17)
            }
            if (squaresRight >= 1) {
                possibleMoves.push(position - 15)
            }
        }
        // get moves right
        if (squaresRight >= 2) {
            if (squaresUp >= 1) {
                possibleMoves.push(position - 6)
            }
            if (squaresDown >= 1) {
                possibleMoves.push(position + 10)
            }
        }
        // get moves down
        if (squaresDown >= 2) {
            if (squaresRight >= 1) {
                possibleMoves.push(position + 17)
            }
            if (squaresLeft >= 1) {
                possibleMoves.push(position + 15)
            }
        }
        // get moves left
        if (squaresLeft >= 2) {
            if (squaresDown >= 1) {
                possibleMoves.push(position + 6)
            }
            if (squaresUp >= 1) {
                possibleMoves.push(position - 10)
            }
        }


        return possibleMoves
    }
}

export default Knight

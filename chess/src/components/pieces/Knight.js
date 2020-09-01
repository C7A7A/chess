import Piece from './Piece.js'
import BlackKnight from '../../assets/svgImages/black_knight.svg'
import WhiteKnight from '../../assets/svgImages/white_knight.svg'
import get_squares_up_down_left_rigt from '../../helpers/get_squares_up_down_left_rigt.js'
import remove_squares_with_pieces_on from '../../helpers/remove_squares_with_pieces_on.js'

class Knight extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackKnight : WhiteKnight), key)
    }

    possibleMoves(pieces, position) {
        var possibleMoves = []

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

        possibleMoves = remove_squares_with_pieces_on(pieces, possibleMoves, this.player)

        return possibleMoves
    }
}

export default Knight

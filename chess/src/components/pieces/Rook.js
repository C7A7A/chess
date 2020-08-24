import Piece from './Piece.js'
import BlackRook from './svgImages/black_rook.svg'
import WhiteRook from './svgImages/white_rook.svg'

class Rook extends Piece {
    constructor(player) {
        super (player, (player === 1 ?  BlackRook : WhiteRook))
    }

    possibleMoves(pieces, position) {
        const possibleMoves = []
        
        const squaresUp = position / 8
        const squaresDown = 7 - squaresUp
        const squaresLeft = position % 8
        const squaresRight = 7 - squaresLeft

        // all possible moves UP
        for (let i = 1; i <= squaresUp; i++) {
            possibleMoves.push(position - (i*8))
        }

        // all possible moves DOWN
        for (let i = 1; i <= squaresDown; i++) {
            possibleMoves.push(position + (i*8))
        }

        // all possible moves LEFT
        for (let i = 1; i <= squaresLeft; i++) {
            possibleMoves.push(position - i)
        }

        // all possible moves RIGHT
        for (let i = 1; i <= squaresRight; i++) {
            possibleMoves.push(position + i)
        }

        return possibleMoves
    }
}

export default Rook

import Piece from './Piece.js'
import BlackPawn from './svgImages/black_pawn.svg'
import WhitePawn from './svgImages/white_pawn.svg'
import remove_squares_with_pieces_on from '../helpers/remove_squares_with_pieces_on.js'

class Pawn extends Piece {
    constructor(player, initPosition) {
        super (player, (player === 1 ?  BlackPawn : WhitePawn))
        this.initPosition = initPosition
    }

    possibleMoves(pieces, position) {
        var possibleMoves = []
        var isInitPosition = true

        // check if pawn is on his initial position
        if (this.initPosition !== position) { 
            isInitPosition = false
        }

        if (this.player === 1) {
            possibleMoves.push(position + 8)
            if (isInitPosition) {
                possibleMoves.push(position + 16)
            }

            if (pieces[position + 8 + 1].player === 2) {
                possibleMoves.push(position + 9)
            }

            if (pieces[position + 8 - 1].player === 2) {
                possibleMoves.push(position + 7)
            }

        } else {
            possibleMoves.push(position - 8)
            if (isInitPosition) {
                possibleMoves.push(position - 16)
            }

            if (pieces[position - 8 - 1].player === 1) {
                possibleMoves.push(position - 9)
            }

            if (pieces[position - 8 + 1].player === 1) {
                possibleMoves.push(position - 7)
            }
        }
        
        possibleMoves = remove_squares_with_pieces_on(pieces, possibleMoves, this.player)

        if (possibleMoves.includes(position + 8) && pieces[position + 8].player) {
            possibleMoves = possibleMoves.filter(move => move !== (position + 8))
        }

        if (possibleMoves.includes(position - 8) && pieces[position - 8].player) {
            possibleMoves = possibleMoves.filter(move => move !== (position - 8))
        }

        return possibleMoves
    }
}

export default Pawn

import Piece from './Piece.js'
import BlackPawn from '../../assets/svgImages/black_pawn.svg'
import WhitePawn from '../../assets/svgImages/white_pawn.svg'
// import remove_squares_with_pieces_on from '../../helpers/remove_squares_with_pieces_on.js'
import check_is_piece_blocking from '../../helpers/check_is_piece_blocking.js'

class Pawn extends Piece {
    constructor(player, key) {
        super (player, (player === 1 ?  BlackPawn : WhitePawn), key)
        this.pawn = true
        this.initialSquare = true
    }

    possibleMoves(pieces, position) {
        var possibleMoves = []
        var isPieceBlocking = ''

        if (this.player === 1) {

            // check if there is any piece in front of pawn
            isPieceBlocking = check_is_piece_blocking(pieces, position + 8, this.player)
            if (isPieceBlocking === 'false') {
                possibleMoves.push(position + 8)
            }
            // check if pawn is on his initial position and if there is any piece in front of pawn 
            if (this.initialSquare && isPieceBlocking === 'false') {
                // check if there is any piece 2 squares in front of pawn
                let isPieceBlocking2 = check_is_piece_blocking(pieces, position + 16, this.player)
                if (isPieceBlocking2 === 'false') {
                    possibleMoves.push(position + 16)
                }
            }

            // bottom-right diagonally
            if (pieces[position + 9]) {
                if (pieces[position + 9].player === 2 && ( (position + 1) % 8) !== 0) {
                    possibleMoves.push(position + 9)
                }
            }
            // bottom-left diagonally
            if (pieces[position + 7]) {
                if (pieces[position + 7].player === 2 && (position % 8) !== 0) {
                    possibleMoves.push(position + 7)
                }
            }
        } else {

            isPieceBlocking = check_is_piece_blocking(pieces, position - 8, this.player)
            if (isPieceBlocking === 'false') {
                possibleMoves.push(position - 8)
            }
            if (this.initialSquare && isPieceBlocking === 'false') {
                let isPieceBlocking2 = check_is_piece_blocking(pieces, position - 16, this.player)
                if (isPieceBlocking2 === 'false') {
                    possibleMoves.push(position - 16)
                }
            }

            // top-left diagonally
            if (pieces[position - 9]) {
                if (pieces[position - 9].player === 1 && (position % 8) !== 0) {
                    possibleMoves.push(position - 9)
                }
            }
            // top-right diagonally
            if (pieces[position - 7]) {
                if (pieces[position - 7].player === 1 && ( (position + 1) % 8) !== 0) {
                    possibleMoves.push(position - 7)
                }
            }
        }
        
        // possibleMoves = remove_squares_with_pieces_on(pieces, possibleMoves, this.player)

        // if (possibleMoves.includes(position + 8) && pieces[position + 8].player) {
        //     possibleMoves = possibleMoves.filter(move => move !== (position + 8))
        // }

        // if (possibleMoves.includes(position - 8) && pieces[position - 8].player) {
        //     possibleMoves = possibleMoves.filter(move => move !== (position - 8))
        // }

        return possibleMoves
    }
}

export default Pawn

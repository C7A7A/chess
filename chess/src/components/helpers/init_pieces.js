import Bishop from '../pieces/Bishop.js'
import King from '../pieces/King.js'
import Knight from '../pieces/Knight.js'
import Pawn from '../pieces/Pawn.js'
import Queen from '../pieces/Queen.js'
import Rook from '../pieces/Rook.js'

function init_pieces() {
    const pieces = Array(64)

    for (let i = 0; i < pieces.length; i++) {
        pieces[i] = {
            style: { backgroundColor: " "},
            key: i
        }
    }

    pieces[0] = new Rook(1, 0)
    pieces[7] = new Rook(1, 7)
    pieces[56] = new Rook(2, 56)
    pieces[63] = new Rook(2, 63)

    pieces[1] = new Knight(1, 1)
    pieces[6] = new Knight(1, 6)
    pieces[57] = new Knight(2, 57)
    pieces[62] = new Knight(2, 62)

    pieces[2] = new Bishop(1, 2)
    pieces[5] = new Bishop(1, 5)
    pieces[58] = new Bishop(2, 58)
    pieces[61] = new Bishop(2, 61)

    pieces[3] = new Queen(1, 3)
    pieces[59] = new Queen(2, 59)

    pieces[4] = new King(1, 4)
    pieces[60] = new King(2, 60)

    for (let i = 8; i < 16; i++) {
        pieces[i] = new Pawn(1, i)
    }

    for (let i = 48; i < 56; i++) {
        pieces[i] = new Pawn(2, i)
    }

    return pieces
}

export default init_pieces

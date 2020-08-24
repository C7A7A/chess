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

    pieces[0] = new Rook(1)
    pieces[7] = new Rook(1)
    pieces[56] = new Rook(2)
    pieces[63] = new Rook(2)

    pieces[1] = new Knight(1)
    pieces[6] = new Knight(1)
    pieces[57] = new Knight(2)
    pieces[62] = new Knight(2)

    pieces[2] = new Bishop(1)
    pieces[5] = new Bishop(1)
    pieces[58] = new Bishop(2)
    pieces[61] = new Bishop(2)

    pieces[3] = new Queen(1)
    pieces[59] = new Queen(2)

    pieces[4] = new King(1)
    pieces[60] = new King(2)

    for (let i = 8; i < 16; i++) {
        pieces[i] = new Pawn(1, i)
    }

    for (let i = 48; i < 56; i++) {
        pieces[i] = new Pawn(2, i)
    }

    return pieces
}

export default init_pieces

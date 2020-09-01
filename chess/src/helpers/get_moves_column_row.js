import get_squares_up_down_left_rigt from './get_squares_up_down_left_rigt.js'
import check_is_piece_blocking from './check_is_piece_blocking.js'

function get_moves_column_row(pieces, position, player) {
    const possibleMoves = []

    const [squaresUp, squaresDown, squaresLeft, squaresRight] = get_squares_up_down_left_rigt(position)
    var isPieceBlocking = ''

     // get moves up
     for (let i = 1; i <= squaresUp; i++) {
        isPieceBlocking = check_is_piece_blocking(pieces, position - (i*8), player)

        if (isPieceBlocking === 'false') {
            possibleMoves.push(position - (i*8))
        } 

        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(position - (i*8))
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    // get moves down
    for (let i = 1; i <= squaresDown; i++) {
        isPieceBlocking = check_is_piece_blocking(pieces, position + (i*8), player)

        if (isPieceBlocking === 'false') {
            possibleMoves.push(position + (i*8))
        } 

        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(position + (i*8))
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    // get moves left
    for (let i = 1; i <= squaresLeft; i++) {
        isPieceBlocking = check_is_piece_blocking(pieces, position - i, player)

        if (isPieceBlocking === 'false') {
            possibleMoves.push(position - i)
        } 

        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(position - i)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    // get moves right
    for (let i = 1; i <= squaresRight; i++) {
        isPieceBlocking = check_is_piece_blocking(pieces, position + i, player)

        if (isPieceBlocking === 'false') {
            possibleMoves.push(position + i)
        } 

        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(position + i)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    return possibleMoves
}

export default get_moves_column_row
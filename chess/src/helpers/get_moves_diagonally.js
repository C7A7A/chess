import get_squares_up_down_left_rigt from './get_squares_up_down_left_rigt.js'
import check_is_piece_blocking from './check_is_piece_blocking.js'

function get_moves_diagonally(pieces, position, player) {
    const possibleMoves = []

    const [ , , squaresLeft, squaresRight] = get_squares_up_down_left_rigt(position)
    
    var positionHelper = position
    var squaresHelper = 0
    var isPieceBlocking = ''
    // get moves diagonally top-right
    while ( (positionHelper - 7) >= 1 && squaresHelper < squaresRight) {
        isPieceBlocking = check_is_piece_blocking(pieces, positionHelper - 7, player)
        
        if (isPieceBlocking === 'false') {
            possibleMoves.push(positionHelper - 7)
            positionHelper -= 7
            squaresHelper++
        } 
        
        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(positionHelper - 7)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }
    
    positionHelper = position
    squaresHelper = 0
    // get moves diagonally bottom-right
    while ( (positionHelper + 9) <= 63 && squaresHelper < squaresRight) {
        isPieceBlocking = check_is_piece_blocking(pieces, positionHelper + 9, player)
        
        if (isPieceBlocking === 'false') {
            possibleMoves.push(positionHelper + 9)
            positionHelper += 9
            squaresHelper++
        } 

        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(positionHelper + 9)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    positionHelper = position
    squaresHelper = 0
    // get moves diagonally bottom-left
    while ( (positionHelper + 7) <= 62 && squaresHelper < squaresLeft) {
        isPieceBlocking = check_is_piece_blocking(pieces, positionHelper + 7, player)
        
        if (isPieceBlocking === 'false') {
            possibleMoves.push(positionHelper + 7)
            positionHelper += 7
            squaresHelper++
        } 
        
        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(positionHelper + 7)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    positionHelper = position
    squaresHelper = 0
    // get moves diagonally top-left
    while ( (positionHelper - 9) >= 0 && squaresHelper < squaresLeft) {
        isPieceBlocking = check_is_piece_blocking(pieces, positionHelper - 9, player)
        
        if (isPieceBlocking === 'false') {
            possibleMoves.push(positionHelper - 9)
            positionHelper -= 9
            squaresHelper++
        } 
        
        if (isPieceBlocking === 'enemy') {
            possibleMoves.push(positionHelper - 9)
            break
        } else if (isPieceBlocking === 'ally') {
            break
        }
    }

    return possibleMoves
}

export default get_moves_diagonally

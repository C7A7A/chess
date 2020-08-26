import get_squares_up_down_left_rigt from '../helpers/get_squares_up_down_left_rigt.js'

function get_moves_diagonally(position) {
    const possibleMoves = []

    const [ , , squaresLeft, squaresRight] = get_squares_up_down_left_rigt(position)
    
    var positionHelper = position
    var squaresHelper = 0
    // get moves diagonally top-right
    while ( (positionHelper - 7) >= 7 && squaresHelper < squaresRight) {
        possibleMoves.push(positionHelper - 7)
        positionHelper -= 7
        squaresHelper++
    }
    
    positionHelper = position
    squaresHelper = 0
    // get moves diagonally bottom-right
    while ( (positionHelper + 9) <= 63 && squaresHelper < squaresRight) {
        possibleMoves.push(positionHelper + 9)
        positionHelper += 9
        squaresHelper++
    }

    positionHelper = position
    squaresHelper = 0
    // get moves diagonally bottom-left
    while ( (positionHelper + 7) <= 56 && squaresHelper < squaresLeft) {
        possibleMoves.push(positionHelper + 7)
        positionHelper += 7
        squaresHelper++
    }

    positionHelper = position
    squaresHelper = 0
    // get moves diagonally top-left
    while ( (positionHelper - 9) >= 0 && squaresHelper < squaresLeft) {
        possibleMoves.push(positionHelper - 9)
        positionHelper -= 9
        squaresHelper++
    }

    return possibleMoves
}

export default get_moves_diagonally

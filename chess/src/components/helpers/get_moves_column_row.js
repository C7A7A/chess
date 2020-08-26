import get_squares_up_down_left_rigt from '../helpers/get_squares_up_down_left_rigt.js'

function get_moves_column_row(position) {
    const possibleMoves = []

    const [squaresUp, squaresDown, squaresLeft, squaresRight] = get_squares_up_down_left_rigt(position)

     // get moves up
     for (let i = 1; i <= squaresUp; i++) {
        possibleMoves.push(position - (i*8))
    }

    // get moves down
    for (let i = 1; i <= squaresDown; i++) {
        possibleMoves.push(position + (i*8))
    }

    // get moves left
    for (let i = 1; i <= squaresLeft; i++) {
        possibleMoves.push(position - i)
    }

    // get moves right
    for (let i = 1; i <= squaresRight; i++) {
        possibleMoves.push(position + i)
    }

    return possibleMoves
}

export default get_moves_column_row
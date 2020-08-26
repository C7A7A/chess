function get_squares_up_down_left_rigt(position) {
    const squaresUp = position / 8
    const squaresDown = 7 - squaresUp
    const squaresLeft = position % 8
    const squaresRight = 7 - squaresLeft

    return [squaresUp, squaresDown, squaresLeft, squaresRight]
}

export default get_squares_up_down_left_rigt

function remove_squares_with_pieces_on(pieces, possibleMoves, player) {
    const incorrectMoves = []

    // TODO: change loop to filter/map
    for (let i = 0; i < possibleMoves.length; i++) {
        var move = possibleMoves[i]
        if (pieces[move].player) {
            if (pieces[move].player === player) {
                incorrectMoves.push(move)
            }
        }
    }

    possibleMoves = possibleMoves.filter( (move) => !incorrectMoves.includes(move))

    console.log(incorrectMoves)
    console.log(possibleMoves)

    return possibleMoves
}

export default remove_squares_with_pieces_on
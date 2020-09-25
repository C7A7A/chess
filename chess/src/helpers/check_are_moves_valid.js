function check_are_moves_valid(pieces, possibleMoves, player, piecePosition) {
    const incorrectMoves = []

    // find position of king
    const king = pieces.find( (piece) => {
        return piece.player === player && piece.king
    })

    // find position of piece which player wants to move
    const piece = pieces.find( (piece) => {
        return (piece.key === piecePosition)
    })

    // simulate every possible move of selected piece
    for (let j = 0; j < possibleMoves.length; j++) {
        // copy pieces to new array and simulate move
        let newPieces = [...pieces]
        newPieces[possibleMoves[j]] = piece
        newPieces[piecePosition] = {
            style: { backgroundColor: ""},
            key: piecePosition
        }

        var kingPosition = king.key

        // if selected piece is king simulate king position
        if (piecePosition !== kingPosition) {
            kingPosition = king.key
        } else {
            kingPosition = possibleMoves[j]
        }

        // check if any opponent`s piece checks king
        for (let i = 0; i < newPieces.length; i++) {

            if (newPieces[i].player) {
                if (newPieces[i].player !== player) {
                    if (newPieces[i].possibleMoves(newPieces, i).includes(kingPosition)) {
                        // console.log(j, newPieces[i])
                        incorrectMoves.push(possibleMoves[j])
                        break
                    }
                }
            }

        }
    }

    // check if king is checked 
    if (piecePosition === king.key) {
        const enemyPieces = pieces.filter(piece => piece.player && piece.player !== player)
        // checked king can`t castle
        if (enemyPieces.some(piece => piece.possibleMoves(pieces, piece.key).includes(king.key))) {
            incorrectMoves.push(piecePosition - 2, piecePosition + 2)
        }
    }

    possibleMoves = possibleMoves.filter( (move) => !incorrectMoves.includes(move))

    return possibleMoves
}

export default check_are_moves_valid

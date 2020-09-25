import get_path from './get_path.js'

function check_castling(pieces, possibleMoves, player, piecePosition) {
    const incorrectMoves = []
    const piece = pieces.find(piece => piece.key === piecePosition)

    if (piece.king) {
        const enemyPieces = pieces.filter(piece => {
            return piece.player && piece.player !== player
        })

        // castling right
        if (possibleMoves.includes(piecePosition + 2)) {
            const path = get_path(piecePosition, piecePosition + 3)
            for (let i = 0; i < path.length; i++) {
               if (enemyPieces.some(piece => piece.possibleMoves(pieces, piece.key).includes(path[i]) )) {
                   incorrectMoves.push(piecePosition + 2)
               }
            }
        } 
        // castling left
        if (possibleMoves.includes(piecePosition - 2)) {
            const path = get_path(piecePosition, piecePosition - 4)
            for (let i = 0; i < path.length; i++) {
                if (enemyPieces.some(piece => piece.possibleMoves(pieces, piece.key).includes(path[i]) )) {
                    incorrectMoves.push(piecePosition - 2)
                }
            }
        }

        possibleMoves = possibleMoves.filter(move => !incorrectMoves.includes(move))
    }

    return possibleMoves
}

export default check_castling
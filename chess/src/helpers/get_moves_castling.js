import get_path from './get_path.js'
import get_rooks from './get_rooks.js'

function get_moves_castling(pieces, position, player) {
    let possibleMoves = []
    var incorrectMoves = []
    const rooks = get_rooks(pieces, player)
    
    if (rooks.length > 0) {
        const king = pieces.find(piece => piece.key === position)
        if (king.initialSquare) {
            rooks.forEach(rook => {
                if (rook.key < king.key) {
                    possibleMoves.push(position - 2)
                } else if (rook.key > king.key) {
                    possibleMoves.push(position + 2)
                }
            })

            possibleMoves.forEach( (move, index) => {
                if (!is_path_clear(pieces, king.key, rooks[index].key)) {
                    incorrectMoves.push(move)
                }
            })

            possibleMoves = possibleMoves.filter(move => !incorrectMoves.includes(move))
        }
    }

    return possibleMoves
}

function is_path_clear(pieces, kingPosition, rookPositon) {
    const path = get_path(kingPosition, rookPositon)

    for (let i = 0; i < path.length; i++) {
        if (pieces[path[i]].player) {
            return false            
        }
    }
    return true
}

export default get_moves_castling
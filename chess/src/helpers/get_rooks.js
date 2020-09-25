function get_rooks(pieces,player) {
    return pieces.filter(piece => {
        return piece.rook && piece.player === player && piece.initialSquare
    })
}

export default get_rooks
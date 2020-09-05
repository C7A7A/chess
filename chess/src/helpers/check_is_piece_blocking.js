function check_is_piece_blocking(pieces, position, player) {
    if(pieces[position]) {
        if (pieces[position].player) {
            if (pieces[position].player !== player) {
                return 'enemy'
            } else {
                return 'ally'
            }
        }
        return 'false'
    }
    return 'error'
}

export default check_is_piece_blocking

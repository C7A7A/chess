function get_path(position1, position2) {
    const path = []
    let lower = -1, higher = -1

    if (position1 > position2) {
        lower = position2
        higher = position1
    } else {
        lower = position1
        higher = position2
    }

    for (let i = lower + 1; i < higher; i++) {
        path.push(i)
    }

    return path
}

export default get_path
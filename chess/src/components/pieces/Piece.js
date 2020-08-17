import React from 'react'

class Piece {
   constructor(player, image) {
       this.player = player
       this.style = {backgroundImage: "url('"+ image + "')"}
   }
}

export default Piece

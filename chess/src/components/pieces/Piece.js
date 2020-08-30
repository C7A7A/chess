class Piece {
   constructor(player, image, key) {
       this.player = player
       this.style = {backgroundImage: "url('"+ image + "')"}
       this.key = key
   }

   possibleMoves(pieces, position) {
       
   }
}

export default Piece

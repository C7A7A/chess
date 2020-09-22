import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Header, Modal} from 'semantic-ui-react'

import WhiteQueen from '../assets/svgImages/white_queen.svg'
import WhiteRook from '../assets/svgImages/white_rook.svg'
import WhiteBishop from '../assets/svgImages/white_bishop.svg'
import WhiteKnight from '../assets/svgImages/white_king.svg'

import BlackQueen from '../assets/svgImages/black_queen.svg'
import BlackRook from '../assets/svgImages/black_rook.svg'
import BlackBishop from '../assets/svgImages/black_bishop.svg'
import BlackKnight from '../assets/svgImages/black_king.svg'

import Rook from './pieces/Rook'
import Queen from './pieces/Queen'
import Knight from '../components/pieces/Knight.js'
import Bishop from '../components/pieces/Bishop.js'

const PromotePawnModal = forwardRef(({pieces, handlePiecesChange}, ref) => {
    const [open, setOpen] = useState(false)
    const [promotePieces, setPromotePieces] = useState([])
    const [pawnToPromoteKey, setPawnToPromoteKey] = useState(-1)
    
    
    const showModal = (player, key) => {
        if (player === 1) {
            setPromotePieces([BlackQueen, BlackRook, BlackBishop, BlackKnight])
        } else {
            setPromotePieces([WhiteQueen, WhiteRook, WhiteBishop, WhiteKnight])
        }
        setPawnToPromoteKey(key)
        setOpen(true)
    } 

    const promotePawn = (pieceSrc) => {
        let player
        let newPieces = [...pieces]

        if (pieceSrc.includes('black')) {
            player = 1
        } else {
            player = 2
        }

        if (pieceSrc.includes('queen')) {
            newPieces[pawnToPromoteKey] = new Queen(player, pawnToPromoteKey)    
        } else if (pieceSrc.includes('rook')) {
            newPieces[pawnToPromoteKey] = new Rook(player, pawnToPromoteKey)    
        } else if (pieceSrc.includes('knight')) {
            newPieces[pawnToPromoteKey] = new Knight(player, pawnToPromoteKey)    
        } else if (pieceSrc.includes('bishop')) {
            newPieces[pawnToPromoteKey] = new Bishop(player, pawnToPromoteKey)    
        }

        handlePiecesChange(newPieces)

        setOpen(false)
    }

    useImperativeHandle(ref, () => {
        return {
            showModal: showModal
        }
    })

    return (
        <Modal 
            open={open}
            size='tiny'
        >
            <Header icon>
            <h3> Promote Pawn </h3>
            </Header>
            <Modal.Content>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img onClick={() => promotePawn(promotePieces[0])} src={promotePieces[0]} className='img-resp mx-auto d-block promote_pawn_img' alt="Queen" />
                        </div>
                        <div className='col'>
                            <img onClick={() => promotePawn(promotePieces[1])} src={promotePieces[1]} className='img-resp mx-auto d-block promote_pawn_img' alt="Rook" />
                        </div>
                        <div className='col'>
                            <img onClick={() => promotePawn(promotePieces[2])} src={promotePieces[2]} className='img-resp mx-auto d-block promote_pawn_img' alt="Bishop" />
                        </div>
                        <div className='col'>
                            <img onClick={() => promotePawn(promotePieces[3])} src={promotePieces[3]} className='img-resp mx-auto d-block promote_pawn_img' alt="Knight" />
                        </div>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
})

export default PromotePawnModal

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

const PromotePawnModal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)
    const [pieces, setPieces] = useState([])
    
    
    const showModal = (player) => {
        if (player === 1) {
            setPieces([BlackQueen, BlackRook, BlackBishop, BlackKnight])
        } else {
            setPieces([WhiteQueen, WhiteRook, WhiteBishop, WhiteKnight])
        }
        setOpen(true)
    } 

    const promotePawn = (pieceSrc) => {
        console.log(pieceSrc)
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
            size='mini'
        >
            <Header icon='level up' content='Promote pawn' />
            <Modal.Content>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img onClick={() => promotePawn(pieces[0])} src={pieces[0]} className='img-resp mx-auto d-block promote_pawn_img' alt="Queen" />
                        </div>
                        <div className='col'>
                            <img onClick={() => promotePawn(pieces[1])} src={pieces[1]} className='img-resp mx-auto d-block promote_pawn_img' alt="Rook" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img onClick={() => promotePawn(pieces[2])} src={pieces[2]} className='img-resp mx-auto d-block promote_pawn_img' alt="Bishop" />
                        </div>
                        <div className='col'>
                            <img onClick={() => promotePawn(pieces[3])} src={pieces[3]} className='img-resp mx-auto d-block promote_pawn_img' alt="Knight" />
                        </div>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
})

export default PromotePawnModal

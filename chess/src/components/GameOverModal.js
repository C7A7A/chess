import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import init_pieces from '../helpers/init_pieces.js'

const GameOverModal = forwardRef(({ handlePiecesChange, setupNewGame, freezeTimer }, ref) => {
    const [open, setOpen] = useState(false)
    const [winnerInfo, setWinnerInfo] = useState('')
    const [gameOverType, setGameOverType] = useState('')

    const showModal = (winner, type) => {
        setWinnerInfo(winner)
        setGameOverType(type)
        setOpen(true)
    }

    const rematch = () => {
        let newPieces = init_pieces()
        handlePiecesChange(newPieces)
        setupNewGame()
        setOpen(false)
    }

    const stopGame = () => {
        freezeTimer()
        setOpen(false)
    }

    useImperativeHandle(ref, () => {
        return {
            showModal: showModal,
        }   
    })

    return (
        <Modal
            basic
            open={open}            
        >
            <Header icon>
                <Icon name='winner' />
                <h1> {winnerInfo} ({gameOverType}) </h1> 
            </Header>
            <Modal.Content>
                <h3 className="text-align-center"> Do you want to rematch? </h3>
            </Modal.Content>
            <Modal.Actions className="text-align-center">
                <Button color='red' size='big' inverted onClick={stopGame}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' size='big' inverted onClick={rematch}>
                    <Icon name='checkmark' /> Yes
                </Button> 
            </Modal.Actions>
        </Modal>
    )
})

export default GameOverModal
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const GameOverModal = forwardRef((props, ref ) => {
    const [open, setOpen] = useState(false)
    const [winnerInfo, setWinnerInfo] = useState('')
    const [gameOverType, setGameOverType] = useState('')
     

    const showModal = (winner, type) => {
        setWinnerInfo(winner)
        setGameOverType(type)
        setOpen(true)
    }

    const rematch = () => {
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
            size='fullscreen'
        >
            <Header icon>
                <Icon name='winner' />
                <h1> {winnerInfo} ({gameOverType}) </h1> 
            </Header>
            <Modal.Content>
                <h3 className="text-align-center"> Do you want to rematch? </h3>
            </Modal.Content>
            <Modal.Actions className="text-align-center">
                <Button color='red' size='big' inverted onClick={() => setOpen(false)}>
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
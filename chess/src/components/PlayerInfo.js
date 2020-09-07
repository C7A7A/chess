import React, { useState, useRef } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import GameOverModal from './GameOverModal.js'

function PlayerInfo({ player, turn }) {
    const [open, setOpen] = useState(false)

    const openModalRef = useRef(null)
    const playerButtonRef = useRef(null)
    // const [draw, setDraw] = useState(false)

    const turnClassName = (turn === 'white') ? 'white_turn' : 'black_turn' 
    const playerClassName = (player === 1) ? 'black_pieces' : 'white_pieces'

    const surrender = () => {
        setOpen(false)
        // console.log(playerButtonRef.current.props.className)
        let info = (playerButtonRef.current.props.className.includes('black_pieces')) ? "White wins!" : "Black wins!"
        openModalRef.current.showModal(info, 'surrender')
    }

    const keepPlaying = () => {
        setOpen(false)
    }

    return (
        <div className="col-12 m-2">
            <GameOverModal ref={openModalRef}/>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button ref={playerButtonRef} className={`red button_player ${playerClassName}`}> Surrender </Button>}
            >
                <Header>
                   <h3> Surrender </h3>
                </Header>
                <Modal.Content>
                    <h4> Are u sure you want to surrender? </h4>  
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={keepPlaying}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={surrender}>
                        <Icon name="checkmark" /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
            {/* <Button className={`primary button_player ${playerClassName}`} onClick={() => setDraw(true)} disabled={draw}> Offer Draw </Button> */}
            <Button className={`button_player button_turn ${turnClassName}`}> {turn} </Button>
        </div>
    )
}

export default PlayerInfo

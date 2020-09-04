import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function PlayerInfo({ player, turn }) {
    const [open, setOpen] = useState(false)

    // const [draw, setDraw] = useState(false)

    const turnClassName = (turn === 'white') ? 'white_turn' : 'black_turn' 
    const playerClassName = (player === 1) ? 'black_pieces' : 'white_pieces'

    return (
        <div className="col-12 m-2">
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button className={`red button_player ${playerClassName}`}> Surrender </Button>}
            >
                <Header>
                    Surrender
                </Header>
                <Modal.Content>
                    <p>
                        Are u sure you want to surrender?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => setOpen(false)}>
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

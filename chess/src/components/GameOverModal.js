import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function GameOverModal({ color }) {
    const [open, setOpen] = useState(false)

    let info = (color) ? `${color} wins!` : 'Draw' 

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
        >
            <Header>
                {info} 
            </Header>
            <Modal.Content>
                <h5> {info} </h5>
                <p> Do you want to rematch? </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted onclick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                </Button> 
            </Modal.Actions>
        </Modal>
    )
}

export default GameOverModal
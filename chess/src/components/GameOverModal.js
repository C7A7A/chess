import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const GameOverModal = forwardRef((props, ref ) => {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState('')
     

    const showModal = (info) => {
        setInfo(info)
        setOpen(true)
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
                <h1> {info} </h1> 
            </Header>
            <Modal.Content>
                <h3 className="modal_text"> Do you want to rematch? </h3>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' size='large' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' size='large' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                </Button> 
            </Modal.Actions>
        </Modal>
    )
})

export default GameOverModal
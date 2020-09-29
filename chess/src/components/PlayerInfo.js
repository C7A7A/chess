import React, { useState, useRef, useEffect } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import GameOverModal from './GameOverModal.js'

function PlayerInfo({ player, turn, handlePieces, setupNewGame, freezeTimer, time, timeStop }) {
    const [open, setOpen] = useState(false)
    const [timeLeft, setTimeLeft] = useState(600)

    const gameOverModalRef = useRef(null)
    const playerButtonRef = useRef(null)
    // const [draw, setDraw] = useState(false)

    const turnClassName = (turn === 'black') ? 'black_turn' : 'white_turn' 
    const playerClassName = (player === 1) ? 'black_pieces' : 'white_pieces'
    const timeClassName = (player === 1) ? 'black_time' : 'white_time'

    const minutes = Math.floor(timeLeft / 60)
    const seconds = (Math.floor(timeLeft - (Math.floor(timeLeft / 60) * 60)) < 10) ? "0" + Math.floor(timeLeft - (Math.floor(timeLeft / 60) * 60)).toString() : Math.floor(timeLeft - (Math.floor(timeLeft / 60) * 60))
    
    const surrender = () => {
        setOpen(false)
        // console.log(playerButtonRef.current.props.className)
        let info = (playerButtonRef.current.props.className.includes('black_pieces')) ? "White wins!" : "Black wins!"
        gameOverModalRef.current.showModal(info, 'surrender')
    }

    const keepPlaying = () => {
        setOpen(false)
    }

    useEffect(() => {
        let countdown = false
        if (player === 2) {
            if (turn === 'white') countdown = true
        }
        if (player === 1) {
            if (turn === 'black') countdown = true
        }

        if (timeLeft > 0 && countdown && !timeStop) {
            const timeoutID = setTimeout(() => {
                setTimeLeft(timeLeft - 1)
            }, 1000)

            return () => clearTimeout(timeoutID)
        } else if (timeLeft <= 0) {
            let info = (playerButtonRef.current.props.className.includes('black_pieces')) ? 'White wins!' : "Black wins!"
            gameOverModalRef.current.showModal(info, 'lame clock win')
            return
        }
        return 
    }, [timeLeft, player, turn, timeStop])

    return (
        <div className="m-2">
            <GameOverModal 
                ref={gameOverModalRef}
                handlePiecesChange={handlePieces}   
                freezeTimer={freezeTimer} 
                setupNewGame={setupNewGame}
            />
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
            <Button className={`button_player cursor-default  ${turnClassName}`}> { turn } </Button>
            <Button className={`primary button_player cursor-default ${timeClassName}`}> { minutes }:{ seconds } </Button>
        </div>
    )
}

export default PlayerInfo

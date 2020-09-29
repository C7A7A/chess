import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import GameOverModal from './GameOverModal.js'

function PlayerInfo({ player, turn, handlePieces, setupNewGame, freezeTimer, time, timeStop }) {
    const initialTimeLeft = {timeLeft: time}

    const reducerTimeLeft = ((state, action) => {
        switch(action.type) {
            case 'decrement':
                return {timeLeft: state.timeLeft - 1}
            case 'reset':
                return {timeLeft: time}
            default:
                throw new Error()
        }
    })

    const [open, setOpen] = useState(false)
    const [state, dispatch] = useReducer(reducerTimeLeft, initialTimeLeft)

    const gameOverModalRef = useRef(null)
    const playerButtonRef = useRef(null)
    // const [draw, setDraw] = useState(false)

    const turnClassName = (turn === 'black') ? 'black_turn' : 'white_turn' 
    const playerClassName = (player === 1) ? 'black_pieces' : 'white_pieces'
    const timeClassName = (player === 1) ? 'black_time' : 'white_time'

    const minutes = Math.floor(state.timeLeft / 60)
    const seconds = (Math.floor(state.timeLeft - (Math.floor(state.timeLeft / 60) * 60)) < 10) ? "0" + Math.floor(state.timeLeft - (Math.floor(state.timeLeft / 60) * 60)).toString() : Math.floor(state.timeLeft - (Math.floor(state.timeLeft / 60) * 60))
    
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

        if (countdown && state.timeLeft > 0 && !timeStop) {
            const timeoutID = setTimeout(() => {
                dispatch({type: 'decrement'})
            }, 1000)

            return () => clearTimeout(timeoutID)
        } else if (state.timeLeft <= 0) {
            let info = (playerButtonRef.current.props.className.includes('black_pieces')) ? 'White wins!' : "Black wins!"
            gameOverModalRef.current.showModal(info, 'clock win')
            return
        }
        return 
    }, [state.timeLeft, player, turn, timeStop])

    useEffect(() => {
        dispatch({type: 'reset'})
    }, [time])

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
            <Button className={`button_player cursor-default  ${turnClassName}`}> { turn } </Button>
            <Button className={`primary button_player cursor-default ${timeClassName}`}> { minutes }:{ seconds } </Button>
        </div>
    )
}

export default PlayerInfo

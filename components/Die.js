import React from 'react'

const Die =(props)=> {
    return (
        <div className={props.isHeld ? 'die isHeld' : 'die'}  onClick={()=> props.holdDice(props.id)}>{props.value}</div>
    )
}

export default Die
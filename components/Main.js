import { nanoid } from 'nanoid'
import React, {useState, useEffect} from 'react'

import Die from './Die'
import Confetti from 'react-confetti'
import Title from './Title'

const Main =()=> {

    const [diceArr, setDiceArr] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    useEffect(() => {
        // console.log("Dice state changed")
        let winningDie = diceArr[0].value;
        let win = diceArr.filter(die => winningDie === die.value && die.isHeld ? null : die);
        win.length === 0 ? setTenzies(true) : setTenzies(false);
        console.log(tenzies)
    }, [diceArr])

    function allNewDice() {
        const dice = []
        while (dice.length < 10) {
            dice.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        }
    return dice
    }
    

    const handleClick =()=> {
        if(tenzies){
            setDiceArr(allNewDice())
        } else {
            setDiceArr(prevState => prevState.map(die => die.isHeld ? die : Object.assign({}, die, {value: Math.ceil(Math.random() * 6)})))
        }
    }
    const holdDice =(id)=> {
        setDiceArr(prevState => prevState.map(die => die.id === id ? Object.assign({}, die, {isHeld: !die.isHeld}) : die));
        // console.log(id)
    }

    const diceElements = diceArr.map(die => {
        return <Die 
                    id={die.id}
                    key={die.id} 
                    value={die.value} 
                    isHeld={die.isHeld} 
                    holdDice={holdDice} 
                    />
    })
    
    return (
        <div>
        <Title />
        <main className="main container">
            {tenzies && <Confetti />}
            <div className="diceDiv">
                {diceElements}
            </div>
            <div className="d-flex justify-content-center">
            <button className="roll-dice" onClick={handleClick}>{tenzies && "New Game" || "Roll"}</button>
            </div>
        </main>
        </div>
    )
}

export default Main
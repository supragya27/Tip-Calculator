import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import {tipP,amtP} from './Calculator'

function Reset() {
    const tipC=useContext(tipP)
    const amtC=useContext(amtP)
    const resetFunc=()=>{
        tipC.setTip(5)
        amtC.setAmt(0)
    }
    return (
        <div>
        <Button variant="danger" onClick={resetFunc}>Reset</Button>
        </div>
    )
}

export default Reset

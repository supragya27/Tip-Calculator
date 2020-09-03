import React,{useContext} from 'react'
import {amtP} from './Calculator'

function BillAmt() {
    const amtC=useContext(amtP)    
    return (
        <div>
        
        <strong class="lrmargin">Enter the amount below:</strong><br/>
            <input type="text" class="lrmargin" value={amtC.amt} onChange={e=>amtC.setAmt(e.target.value)}/>
        </div>
    )
}

export default BillAmt

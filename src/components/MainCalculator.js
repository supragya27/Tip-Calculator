import React, { useContext } from 'react'
import BillAmt from './BillAmt'
import Slider from './Slider'
import { tipP, amtP } from './Calculator'

function MainCalculator() {
    const tipC = useContext(tipP)
    const amtC = useContext(amtP)
    return (
        <div id="mainC">

            <BillAmt />
            <Slider />
            <br /><br />
            <div class="lrmargin">
                <strong>The amount of Tip is:</strong><br />
                {`₹ ${amtC.amt * tipC.tip / 100}`}
            </div>
        </div>
    )
}

export default MainCalculator

import React, { useState } from 'react'
import '../App.css'
import MainCalculator from './MainCalculator'
import Reset from './Reset'

export const tipP = React.createContext();
export const amtP = React.createContext();

function Calculator() {
    const [tip, setTip] = useState(5);
    const [amt, setAmt] = useState(0);

    return (
        <div class="calc">
            <tipP.Provider value={{ tip, setTip }}>
                <amtP.Provider value={{ amt, setAmt }}>
                    <div class="row calc">
                        <div class="col-sm-8">
                            <MainCalculator />
                        </div>
                        <div class="col-sm-4">
                            <Reset />
                        </div>
                    </div>
                </amtP.Provider>
            </tipP.Provider>
        </div>
    )
}

export default Calculator

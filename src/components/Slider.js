import React, { useContext } from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import { tipP } from './Calculator'

function Slider() {
  const tipC = useContext(tipP)

  return (
    <div class="slider">
      <strong>Slide to the percentage of amount for the Tip:</strong>
      <RangeSlider
        value={tipC.tip}
        onChange={changeEvent => tipC.setTip(changeEvent.target.value)}
      />
    </div>
  )
}

export default Slider

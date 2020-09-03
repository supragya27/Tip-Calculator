import React from 'react'
import { Card } from 'react-bootstrap'
function InfoCell() {
  return (
    <div class="cardM">
      <Card>
        <Card.Body class="cardBody">
          <Card.Title>Help desk</Card.Title>
          <Card.Text>
            <ul>
              <li>Enter the amount in INR in the amount field.</li>
              <li>Scroll the slider to get the percentage of amount for the tip desired.</li>
            </ul>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}

export default InfoCell

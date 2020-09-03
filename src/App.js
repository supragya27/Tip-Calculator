import React from 'react';
import { Container, Row } from 'react-bootstrap'
import './App.css'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Calculator from './components/Calculator'
import InfoCell from './components/InfoCell'

function App() {
  return (
    <Container>
      <div className="App">

        <Heading />

        <Row>

          <div className="col-sm-2"></div>
          <div className="col-sm-6"><Calculator /></div>
          <div className="col-sm-4"><InfoCell /></div>

        </Row>

        <Footer />

      </div>
    </Container>
  );
}

export default App;
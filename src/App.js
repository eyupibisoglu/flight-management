import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import FlightList from './components/FlightList.js'
import FlightAdd from './components/FlightAdd.js'
import { Container, Row, Col } from 'reactstrap';
import NavbarContainer from './components/NavbarContainer'

class App extends Component 
{
    render() 
    {
        return (
            <div className="App">
                <NavbarContainer /> 
               
             
                <Container>
                    <Row className="content">
                        <Col>
                            <Route path="/flights" component={FlightList} />
                            <Route path="/addFlight" component={FlightAdd} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default App;

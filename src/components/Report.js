import React, { Component } from 'react';
import { Card, Container, Row, Col, Badge } from 'reactstrap';

class Report extends Component 
{
    

    render() 
    {
        const flights = [{ "_id": 1, "origin": "İstanbul", "destination": "Antalya" }, { "_id": 2, "origin": "İstanbul", "destination": "Ankara" }]

        return (
            <Container>
                <Row>
                    <Col>
                        <Card body>
                            <div>
                                Flights <Badge color="info">{flights.length}</Badge>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            Flights {flights.length}
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            Flights {flights.length}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Report;

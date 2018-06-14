import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Button, Card } from 'reactstrap';
import { addFlight } from '../actions'
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
      addFlight: flight => dispatch(addFlight(flight))
    };
  };

class FlightAdd extends Component 
{
    constructor()
    {
        super()
        this.addFlight = this.addFlight.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            _id: "",
            origin: ""
        }
    }

    handleChange({ target }) 
    {
        this.setState({
          [target.id]: target.value,
        });
    }

    render() 
    {
        const origins      = [{"_id": "1", "name": "İstanbul" },{"_id": "2",  "name": "Ankara"}, {"_id": "3",  "name": "İzmir" }]
        const destinations = [{"_id": "4", "name": "Antalya"}, {"_id": "5",  "name": "Sivas" }, {"_id": "6",  "name": "Artvin" }]

        const originListItems      = origins.map(origin => <option key={origin._id}>{origin.name}</option>)
        const destinationListItems = destinations.map(destination => <option key={destination._id}>{destination.name}</option>)

        return (
            <Card body>
            <Form onSubmit={this.addFlight}>
            <FormGroup>
                <Label for="exampleEmail">Flight Id</Label>
                <Input type="text" id="_id" placeholder="Flight id" value={this.state._id} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Origins</Label>
                <Input type="select" name="select"  value={this.state.origin} id="origin" onChange={this.handleChange}>
                    <option></option>
                    {originListItems}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Destinations</Label>
                <Input type="select" name="select"  id="destination" onChange={this.handleChange}>
                <option></option>
                    {destinationListItems}
                </Input>
            </FormGroup>
            <Button onClick={this.addFlight}>Add</Button>
            </Form>
            </Card>
        );
    }

    addFlight(event)
    {
        event.preventDefault();
        const _id         = this.state._id
        const origin      = this.state.origin
        const destination = this.state.destination

        this.props.addFlight({ _id, origin, destination });
        console.log('#', this.state)
    }
}

export default connect(null, mapDispatchToProps)(FlightAdd);

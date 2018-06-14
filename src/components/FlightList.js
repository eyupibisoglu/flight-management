import React, { Component } from 'react';
import Flight from '../components/Flight.js'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import { connect } from "react-redux";
import { deleteFlight } from '../actions'

const mapStateToProps = state => ({ 
    fetching: state.fetching,
    flights: state.flights,
    error: state.error
 })
const mapDispatchToProps = dispatch => {
    return {
        onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
        deleteFlight: flight => dispatch(deleteFlight(flight))

    };
  };

class FlightList extends Component 
{
    

    render() 
    {
        const flightListItems = this.props.flights.map( flight => (
            <ListGroupItem key={flight._id}>
                <Flight key={flight._id} origin={flight.origin} destination={flight.destination} />
                <Button className="float-right" color="danger" size="sm" onClick={this.deleteFlight.bind(this, flight)}>
                    <FontAwesome
                        name='times'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </Button>
            </ListGroupItem>))

        return (
            <ListGroup>
        
            
            {flightListItems}
            </ListGroup>
        );
    }

    deleteFlight(flight)
    {
        this.props.deleteFlight(flight);
        console.log('#', flight)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlightList);

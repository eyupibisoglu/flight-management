import React, { Component } from 'react';
import '../styles/Flight.css';
import FontAwesome from 'react-fontawesome'

class Flight extends Component 
{
    render() 
    {
        return (
                <span>
                    <FontAwesome
                        className='plane'
                        name='plane'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    &nbsp;
                    {this.props.origin} -> {this.props.destination}
                </span>
        );
    }
}

export default Flight;

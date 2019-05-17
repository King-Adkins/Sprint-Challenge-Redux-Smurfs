import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class Smurfs extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {};

    render() {
        return(
            <div>
                <div>Smurfs List</div>
                <Smurf />
            </div>
        );
    };
};

const mapStateToProps = (state) => {};


export default connect(mapStateToProps, {})(Smurfs);
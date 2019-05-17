import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class Smurfs extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.getSmurfs();
    };

    render() {
        return(
            <div>
                <div>Smurfs List</div>
                <Smurf />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching,
        error: state.error
    }
};


export default connect(mapStateToProps, { getSmurfs })
(Smurfs);
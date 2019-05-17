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
                {this.props.fetching ? <h1 className = 'fullAlert'>The Smurfs are on the move.....</h1> :null }
                {this.props.error !== null ? <h1 className = 'fullAlert'>{this.props.error}</h1> :null }
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Smurfs extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {};

    render() {
        return(
            <div>Smurfs List</div>
        );
    };
};

const mapStateToProps = (state) => {};


export default connect(mapStateToProps, {})(Smurfs);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            height: ''
        };
    };

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value} );
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className = 'smurfForm'>
                <form onSubmit = {this.handleSubmit}>
                    <input
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.handleInput}
                        placeholder = 'Name' 
                    />
                    <input
                        type = 'number'
                        value = {this.state.age > 0 ? this.state.age : ''}
                        onChange = {this.handleInput}
                        placeholder = 'Age'
                    />
                    <input
                        name = 'height'
                        value = {this.state.height}
                        onChange = {this.handleInput}
                        placeholder = 'Height'
                    />
                    <button type = 'submit'>Add Smurf</button>

                </form>

            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {}
};

export default connect( mapStateToProps, {})
(AddSmurf);
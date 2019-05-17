import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: 0,
            height: ''
        })
    }

    render() {
        return (
            <div className = 'smurfForm'>
                {(<form onSubmit = {this.handleSubmit}>
                    <input
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.handleInput}
                        placeholder = 'Name' 
                    />
                    <input
                        name = 'age'
                        type = 'number'
                        value = {this.state.age > 0 ? this.state.age : null} min = '0' max = '2000'
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

                </form>)}

            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        adding: state.adding
    }
};

export default connect( mapStateToProps, { addSmurf })
(AddSmurf);
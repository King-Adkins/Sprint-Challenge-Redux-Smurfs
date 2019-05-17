import React from 'react';

const Smurf = (props) => {
    return (
        <div className = 'smerfData'>
            <div className = 'smurfName'>{props.smurf.name}</div>
            <div>{props.smurf.age} years old.</div>
            <div>{props.smurf.height} small.</div>
        </div>
    );
};

export default Smurf;
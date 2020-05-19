import React from 'react';

function Eventcard(props) {
    return (
    <div>
    <h3>Event: {props.natEvent.title}</h3>
    <p>Type: {props.natEvent.categories[0].title}</p>
    <p>Location: {(props.natEvent.geometry[props.natEvent.geometry.length - 1].coordinates).join(', ')}</p>
    </div>
    )
}

export default Eventcard;
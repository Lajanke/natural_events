import React from 'react';

const Eventcard = (props) => {
    const {title} = props.natEvent.categories[0]  
    return (
        <div>
            <h3>Event: {props.natEvent.title}</h3>
            <p>Type: {title}</p>
            {props.natEvent.description && 
            <p>{props.natEvent.description}</p>
            }
        </div>
    )
}

export default Eventcard;
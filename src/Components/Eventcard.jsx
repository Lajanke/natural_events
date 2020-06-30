import React from 'react';

const Eventcard = (props) => {
    const { title } = props.natEvent.categories[0];
    const [{ url }] = props.natEvent.sources;
    const { description } = props.natEvent;

    return (
        <div >
            <h3>Event: {props.natEvent.title}</h3>
            <p>Type: {title}</p>
            {description &&
                <p>{description}</p>
            }
            <a href={url}>Source: External link</a>
        </div>
    )
}

export default Eventcard;


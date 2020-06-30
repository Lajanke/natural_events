import React from 'react';
import Eventcard from './Eventcard';
import DoughnutExample from './DoughnutChart';

const Eventlist = (props) => {
    return (
        <div>
            <DoughnutExample natEvents={props.natEvents} />
            <br />
            <ul>
                {props.natEvents.map(natEvent => {
                    return (
                        <li key={natEvent.id} className={`${natEvent.categories[0].title.split(' ').join('')}border`}>
                            <Eventcard natEvent={natEvent} />
                        </li>
                    )
                })}
            </ul>

        </div>
    );
};

export default Eventlist;


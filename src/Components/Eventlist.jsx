import React from 'react';
import Eventcard from './Eventcard';
import DoughnutExample from './DoughnutChart';

const Eventlist = (props) => {
        return (
            <div>
                 <DoughnutExample natEvents={props.natEvents}/>
                 <br/>
            <ul>
                {props.natEvents.map(natEvent => {
                    return (
                    <li key={natEvent.id}>
                        <Eventcard natEvent={natEvent} />
                    </li>
                    )
                })}
            </ul> 
               
            </div>     
        );
        
    
};

export default Eventlist;

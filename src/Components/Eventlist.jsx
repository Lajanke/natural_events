import React from 'react';
import Eventcard from './Eventcard';
import axios from 'axios';
import DoughnutExample from './DoughnutChart';

class Eventlist extends React.Component {
    state = {
        natEvents: [],
        isLoading: true,
    }
    
    componentDidMount() {
        axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=30')
        .then(response => {
            this.setState ({natEvents: response.data.events, isLoading: false})
        })
    }

    render() {
        if(this.state.isLoading) return <h2>Retrieving Data</h2>
        return (
            <div>
            <ul>
                {this.state.natEvents.map(natEvent => {
                    return (
                    <li key={natEvent.id}>
                        <Eventcard natEvent={natEvent} />
                    </li>
                    )
                })}
            </ul> 
                <DoughnutExample natEvents={this.state.natEvents}/>
            </div>     
        );
        
    }
};

export default Eventlist;

/*{
        "title": "EONET Events",
        "description": "Natural events from EONET.",
        "link": "https://eonet.sci.gsfc.nasa.gov/api/v3/events",
        "events": [
            {
                "id": "EONET_4654",
                "title": "Tropical Cyclone Amphan",
                "description": null,
                "link": "https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_4654",
                "closed": null,
                "categories": [
                    {
                        "id": "severeStorms",
                        "title": "Severe Storms"
                    }
                ],
                "sources": [
                    {
                        "id": "GDACS",
                        "url": "https://www.gdacs.org/Cyclones/report.aspx?eventid=1000667&amp;eventtype=TC"
                    },
                    {
                        "id": "JTWC",
                        "url": "https://www.metoc.navy.mil/jtwc/products/io0120.tcw"
                    }
                ],
                "geometry": [
                    {
                        "magnitudeValue": 35.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-16T06:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            85.9,
                            10.0
                        ]
                    },
                    {
                        "magnitudeValue": 40.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-16T12:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.0,
                            10.3
                        ]
                    },
                    {
                        "magnitudeValue": 50.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-16T18:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.1,
                            10.7
                        ]
                    },
                    {
                        "magnitudeValue": 60.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-17T00:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.3,
                            11.0
                        ]
                    },
                    {
                        "magnitudeValue": 65.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-17T06:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.3,
                            11.4
                        ]
                    },
                    {
                        "magnitudeValue": 75.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-17T12:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.4,
                            12.0
                        ]
                    },
                    {
                        "magnitudeValue": null,
                        "magnitudeUnit": null,
                        "date": "2020-05-17T18:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.5,
                            12.6
                        ]
                    },
                    {
                        "magnitudeValue": null,
                        "magnitudeUnit": null,
                        "date": "2020-05-18T00:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.4,
                            13
                        ]
                    },
                    {
                        "magnitudeValue": null,
                        "magnitudeUnit": null,
                        "date": "2020-05-18T06:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.2,
                            13.4
                        ]
                    },
                    {
                        "magnitudeValue": null,
                        "magnitudeUnit": null,
                        "date": "2020-05-18T12:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            86.3,
                            14
                        ]
                    }
                ]
            },
            {
                "id": "EONET_4655",
                "title": "Tropical Storm Arthur",
                "description": null,
                "link": "https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_4655",
                "closed": null,
                "categories": [
                    {
                        "id": "severeStorms",
                        "title": "Severe Storms"
                    }
                ],
                "sources": [
                    {
                        "id": "GDACS",
                        "url": "https://www.gdacs.org/Cyclones/report.aspx?eventid=1000668&amp;eventtype=TC"
                    },
                    {
                        "id": "NOAA_NHC",
                        "url": "https://www.nhc.noaa.gov/archive/2020/ARTHUR.shtml"
                    }
                ],
                "geometry": [
                    {
                        "magnitudeValue": 35.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-17T03:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            -77.7,
                            29.4
                        ]
                    },
                    {
                        "magnitudeValue": 40.00,
                        "magnitudeUnit": "kts",
                        "date": "2020-05-18T09:00:00Z",
                        "type": "Point",
                        "coordinates": [
                            -76.6,
                            33.5
                        ]
                    }
                ]
            }
        ]
    } */
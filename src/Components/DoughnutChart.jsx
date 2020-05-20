import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

class DoughnutExample extends React.Component {
state = {
    cats: ['Sea and Lake Ice', 'Severe Storms', 'Volcanoes', 'Wildfires'],
    isLoading: true,
    catCount: [],
}

/*componentDidMount() {
    axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
    .then(response => {
        this.setState ({cats: response.data.categories.map(cat => cat.title), isLoading: false})
    })
}*/

  render() {
    const data = {
        labels: this.state.cats,
        datasets: [{
            data: this.state.cats.map((cat) => {
                return this.props.natEvents.filter((event) => event.categories[0].title === cat).length
            }),
            backgroundColor: [
            '#93c9b0',
            '#566b28',
            '#0d4023',
            '#2a7a2a',
            ],
            hoverBackgroundColor: [
            '#a0dbc0',
            '#6a8531',
            '#135e34',
            '#328f32',
            ]
        }]
    };

    return (
      <div>
        <h2>Events in last 30 days</h2> 
        <Doughnut data={data} />
      </div>
    );
  }

}

export default DoughnutExample;
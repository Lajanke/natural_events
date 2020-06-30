import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutExample extends React.Component {
  state = {
    cats: ['Sea and Lake Ice', 'Severe Storms', 'Volcanoes', 'Wildfires'],
    isLoading: true,
    catCount: [],
  }

  render() {
    const data = {
      labels: this.state.cats,
      datasets: [{
        data: this.state.cats.map((cat) => {
          return this.props.natEvents.filter((event) => event.categories[0].title === cat).length
        }),
        backgroundColor: [
          '#125dff',
          '#8a8a88',
          '#d90000',
          '#ffb300',
        ],
        hoverBackgroundColor: [
          '#0a328a',
          '#595957',
          '#700606',
          '#b88102',
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
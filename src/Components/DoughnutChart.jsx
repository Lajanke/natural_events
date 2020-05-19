import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

class DoughnutExample extends React.Component {
state = {
    cats: [],
    isLoading: true,
    catCount: [],
}

componentDidMount() {
    axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
    .then(response => {
        this.setState ({cats: response.data.categories.map(cat => cat.title), isLoading: false})
    })
}

  render() {
    console.log({ cats: this.state.cats, natEvents: this.props.natEvents })
    const data = {
        labels: this.state.cats,
        datasets: [{
            data: this.state.cats.map((cat) => {
                return this.props.natEvents.filter((event) => event.categories[0].title === cat).length
            }),
            backgroundColor: [
            '#ffb759',
            '#c2bab0',
            '#556e51',
            '#446adb',
            '#523333',
            '#a432a8',
            '#aeeef2',
            '#ffff30',
            '#ffffff',
            '#ff1492',
            '#b30202',
            '#32506e',
            '#de8a0d',
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    );
  }

}

export default DoughnutExample;
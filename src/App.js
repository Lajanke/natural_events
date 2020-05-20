import React from 'react';
import './App.css';
import Header from './Components/Header';
import Eventlist from './Components/Eventlist';
import Map from './Components/Map';
import axios from 'axios';

class App extends React.Component {
  state = {
    natEvents: [],
    isLoading: true,
}

  componentDidMount() {
    axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=2500') //add functionality for user to set days `${days}`, input.
    .then(response => {
        this.setState ({natEvents: response.data.events, isLoading: false})
    })
}

  render() {
    if(this.state.isLoading) return <div class="loader"></div>
    console.log('rendering')
    return (
      <div className='App'>
        <Header/>
        <Eventlist natEvents={this.state.natEvents}/>
        <br/>
        <Map natEvents={this.state.natEvents}/>
      </div>
    );
  };
};

export default App;


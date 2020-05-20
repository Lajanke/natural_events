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
    axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=30') //add functionality for user to set days `${days}`, input.
    .then(response => {
        this.setState ({natEvents: response.data.events, isLoading: false})
    })
}

  render() {
    if(this.state.isLoading) return <div className="loader"></div>
    console.log('rendering')
    return (
      <div className='App'>
        <Header/>
        <br/>
        <Map natEvents={this.state.natEvents}/>
        <Eventlist natEvents={this.state.natEvents}/>
        <br/>
        <footer>
          Map icons by <a href="https://icons8.com">Icons8</a>
        </footer>
      </div>
    );
  };
};

export default App;


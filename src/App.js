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
    axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=30')
      .then(response => {
        this.setState({ natEvents: response.data.events, isLoading: false })
      })
  }

  render() {
    if (this.state.isLoading) return <div className="loader"></div>

    const { natEvents } = this.state;

    return (
      <div className='App'>
        <Header />
        <br />
        <Map natEvents={natEvents} />
        <Eventlist natEvents={natEvents} />
        <br />
        <footer>
          Map icons by <a href="https://icons8.com">Icons8</a>
        </footer>
      </div>
    );
  };
};

export default App;

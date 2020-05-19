import React from 'react';
import './App.css';
import Header from './Components/Header';
import Eventlist from './Components/Eventlist';
import Map from './Components/Map';

class App extends React.Component {

  render() {
    console.log('rendering')
    return (
      <div className='App'>
        <Header/>
        <Eventlist/>
        <br/>
        <Map/>
      </div>
    );
  };
};

export default App;


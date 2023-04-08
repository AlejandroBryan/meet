import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      locations: [],
      events: []
    }
  }
  componentDidMount(){

  }

  
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents/>
        <EventList events={this.state.events}/>
      </div>
    );


  }
 
}


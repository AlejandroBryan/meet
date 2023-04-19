import 'nprogress/nprogress.css'
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      locations: [],
      selectedCity: null,
      events: [],
      eventCount: 32
    }
  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  updateEvents = (location, eventCount) => {
    const {selectedCity} = this.state;
    if(!eventCount){
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
          const shownEvents = locationEvents.slice(0, this.state.eventCount);
        this.setState({
          events: shownEvents,
         selectedCity: location
        });
      });
    }else if (eventCount && !location){
      getEvents().then((events) => {
        const locationEvents = events.filter((event) =>
          this.state.locations.includes(event.location)
        );
        const shownEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: shownEvents,
          eventCount: eventCount,
        });
      });
    }else if(selectedCity === 'all'){
        getEvents().then((events) => {
          const locationEvents = events;
          const shownEvents = locationEvents.slice(0, eventCount);
          this.setState({
            events: shownEvents,
            eventCount: eventCount,
          });
        });
    }
     else{
      getEvents().then((events) => {
        const locationEvents = selectedCity === 'all' ?
          events :
          events.filter((event) => event.location === location);
          const shownEvents = locationEvents.slice(0, this.state.eventCount);
        this.setState({
          events: shownEvents,
          eventCount
        });
      });
    }
 
  }

  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
         selectedCity={this.state.selectedCity}
         eventCount={this.state.eventCount}
         updateEvents={this.updateEvents}
         />
        <EventList events={this.state.events} />
      </div>
    );


  }
 
}


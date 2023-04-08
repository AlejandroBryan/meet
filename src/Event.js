import React, { Component } from "react";


export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
  }
};


  render() {
    const { event } = this.props;
    return(
     <div className="event">
        <button className="details"
          onClick={() => this.setState({collapsed : true})}
        >
        show details

      </button>
      <button className="hide"
      onClick={() => this.setState({collapsed : false})}
      
      >
        hide details
        </button>
        <h2 className="summary">{event.summary}</h2>
        <p className="description">{event.description}</p>
        <p className="location">{event.location}</p>
      </div>
    )
  }
}

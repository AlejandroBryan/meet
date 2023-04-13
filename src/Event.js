import React, { Component } from "react";
import moment from 'moment';

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
  }
  
  }
  handleChange = () => {
    if(this.state.collapsed === true){
      return this.setState({collapsed: false});
    }
    else{
      return this.setState({collapsed: true});
    }
    
  }


  render() {
    const { event } = this.props;
    const { collapsed} = this.state;
    const startTime = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm:ss a');
    const endTime = moment(event.end.dateTime).format('MMMM Do YYYY, h:mm:ss a');
    return( 
      <div className="event">
        {collapsed ?(
          <div>
        <h1 className="summary">{event.summary}</h1>
        <h3>Start: { `${startTime} (${event.start.timeZone})`}</h3>
        <h4 className="location">{`@${event.summary}`} | {event.location}  </h4>
        </div>

    ):(
      <div>
      <h1 className="summary">{event.summary}</h1>
      <h3>Start: { `${startTime} (${event.start.timeZone})`}</h3>
      <p className="description">
      <span>Description</span>
      {event.description}
      </p>
      <h4 className="location">{`@${event.summary}`} | {event.location}  </h4>
      <h4>End: { `${endTime} (${event.start.timeZone})`}</h4>
      </div>
    ) }

    <div className="button-wrapper">
          <button className="details-btn"
            onClick={this.handleChange}
          >
            {this.state.collapsed ? 'show details': 'hide details'}
          
         </button>
        </div>

    </div>
     
        
       

       

      
     
        
     
         
    )
  }
}

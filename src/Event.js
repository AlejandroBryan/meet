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
        <h2>Start: { `${startTime} (${event.start.timeZone})`}</h2>
        <h3 className="location">{`@${event.summary}`} | {event.location}  </h3>
        </div>

    ):(
      <div>
      <h1 className="summary">{event.summary}</h1>
      <h4>Start: { `${startTime} (${event.start.timeZone})`}</h4>
      <p className="description">
      <span>Description</span>
      {event.description}
      </p>
      <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
        Go for more details
      </a>
      <h5 className="location">{`@${event.summary}`} | {event.location}  </h5>
      <h6>End: { `${endTime} (${event.start.timeZone})`}</h6>
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

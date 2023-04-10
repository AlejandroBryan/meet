import React, { Component } from "react";


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
    return(
     <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="description">{event.description}</p>
        <p className="location">location : {event.location}  </p>

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

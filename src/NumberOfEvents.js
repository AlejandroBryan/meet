import { Component } from 'react';
import { ErrorAlert } from './Alert';


export default class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            query: 32,
            infoText: ''
        }
    }
    handleChange = (e) => {
        const {value} = e.target;

        if(value < 1 || value > 32){
            this.setState({
                query: value,
                infoText: 'Please enter a number between 1 - 32 '
            })
        }else{
            this.setState({
                query: value,
                infoText: ''
            })
        }
        
        this.props.updateEvents(this.props.selectedCity, value)
    }

render() {
    const { query } = this.state;
 
    return (
        <div className="numberOfEventsComponent">
        <h4>
         Number of events
        </h4>
         <input 
          type="number" 
          id="default-number" 
          name="number" 
          className='numberOfEvents'
          value={query}
          onChange={this.handleChange}
          max={32}
          min={1}
          />
          <div className="Alert-Error">
          <ErrorAlert  text={this.state.infoText}/>
          </div>
          
        </div>
     
    )
}


}
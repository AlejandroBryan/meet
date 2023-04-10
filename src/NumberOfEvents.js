import { Component } from 'react';


export default class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            number: 32
        }
    }
    handleChange = (e) => {
        this.setState({number: e.target.value})
    }

render() {
    const { number } = this.state;
 
    return (
        <div className="numberOfEvents">
        <h4>
         Number of events
        </h4>
         <input 
          type="number" 
          id="default-number" 
          name="number" 
          className='number'
          value={number}
          onChange={this.handleChange}
          max={32}
          min={0}
          />
        </div>
     
    )
}


}
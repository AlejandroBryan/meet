import { Component } from 'react';


export default class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            query: 32
        }
    }
    handleChange = (e) => {
        const {value} = e.target;
        this.setState({query: value})
        this.props.updateEvents(this.props.selectedCity, value)
    }

render() {
    const { query } = this.state;
 
    return (
        <div>
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
        </div>
     
    )
}


}
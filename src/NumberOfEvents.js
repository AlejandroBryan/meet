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
    console.log(number);
    return (
        <>
        <label for="default-number"> Number of events</label>
         <input 
          type="textbox" 
          id="default-number"
          className='number' 
          name="number" 
          value={this.state.number}
          onChange={this.handleChange}
          />
        
        
        </>
     
    )
}


}
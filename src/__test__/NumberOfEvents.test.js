import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> Component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>)
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
      });

    test('Check the number default value', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
       
      });

      test('Renders text input correctly', () => {
        const number =  NumberOfEventsWrapper.state('number');
         expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
       });
    

    test('Check and update the number default value', () => {
        const defaultValue =  NumberOfEventsWrapper.setState({number: 32});
        const eventObject = { target: { number: 'value' } };
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('number')).not.toBe(defaultValue);
        console.log(NumberOfEventsWrapper)
      });

   

})
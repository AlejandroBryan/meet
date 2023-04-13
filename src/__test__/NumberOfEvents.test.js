import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> Component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />)
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
      });

    test('Check the number default value', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
       
      });

      test('Renders text input correctly', () => {
        const query =  NumberOfEventsWrapper.state('query');
         expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(query);
       });
    

    test('Check and update the number default value', () => {
        const defaultValue =  NumberOfEventsWrapper.setState({query: 32});
        const eventObject = { target: { number: 'value' } };
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).not.toBe(defaultValue);
      });

   

})
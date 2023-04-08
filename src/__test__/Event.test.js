import { shallow } from "enzyme";
import Event from '../Event'
import { mockData } from '../mock-data';

describe('<Event /> Component', () => {
    let EventWrapper;
    const event = mockData[0]
    console.log(event)
    beforeAll(()=> {
      EventWrapper = shallow(<Event event={event}/>)
      
    })
    
    test('should be defined', ()=>{
        expect(EventWrapper).toBeDefined();
    })

    test('render show details button', () => {
      expect(EventWrapper.find('.details')).toHaveLength(1);
    });
    
    test('render hide details button', () => {
      expect(EventWrapper.find('.hide')).toHaveLength(1);
    });

    test('render event view', () => {
      expect(EventWrapper.find('.event')).toHaveLength(1);
      expect(EventWrapper.find('h2.summary')).toHaveLength(1);
      expect(EventWrapper.find('p.location')).toHaveLength(1);
      expect(EventWrapper.find('p.description')).toHaveLength(1);
    });

    test('Check the collapsed default value', () => {
      EventWrapper.setState({collapsed: true});
      expect(EventWrapper.state('collapsed')).toBe(true);
    });

  

    test('Hide event details button', () => {
      EventWrapper.setState({
        collapsed: true
      });

      const eventObject = EventWrapper.setState({ collapsed: false });
      EventWrapper.find('.hide').simulate('click', eventObject);
      expect(EventWrapper.state('collapsed')).toBe(false);
      expect(EventWrapper.find('.hide').text()).toBe('hide details')
    });

    test('Show event details button', () => {
      EventWrapper.setState({
        collapsed: false
      });

      const eventObject = EventWrapper.setState({ collapsed: true });
      EventWrapper.find('.details').simulate('click', eventObject);
      expect(EventWrapper.state('collapsed')).toBe(true);
      expect(EventWrapper.find('.details').text()).toBe('show details')
    });







})
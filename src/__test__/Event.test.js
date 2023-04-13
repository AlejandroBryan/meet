import { shallow } from "enzyme";
import Event from '../Event'
import { mockData } from '../mock-data';

describe('<Event /> Component', () => {
    let EventWrapper;
    const event = mockData[0]
    beforeAll(()=> {
      EventWrapper = shallow(<Event event={event}/>)
      
    })
    
    test('should be defined', ()=>{
        expect(EventWrapper).toBeDefined();
    })

    test('render show details button', () => {
      expect(EventWrapper.find('.details-btn')).toHaveLength(1);
    });
    

    test('render event view', () => {
      expect(EventWrapper.find('.event')).toHaveLength(1);
      expect(EventWrapper.find('h1.summary')).toHaveLength(1);
      expect(EventWrapper.find('h4.location')).toHaveLength(1);
      //expect(EventWrapper.find('p.description')).toHaveLength(1);
    });

    test('Check the collapsed default value', () => {
      EventWrapper.setState({collapsed: true});
      expect(EventWrapper.state('collapsed')).toBe(true);
    });

  

    test('Hide event details button', () => {
      EventWrapper.setState({
        collapsed: true
      });

      const eventObject = EventWrapper.update();
      EventWrapper.find('.details-btn').simulate('click', eventObject);
      expect(EventWrapper.state('collapsed')).toBe(false);
      expect(EventWrapper.find('.details-btn').text()).toBe('hide details')
    });

    test('Show event details button', () => {
      EventWrapper.setState({
        collapsed: false
      });

      const eventObject = EventWrapper.update();
      EventWrapper.find('.details-btn').simulate('click', eventObject);
      expect(EventWrapper.state('collapsed')).toBe(true);
      expect(EventWrapper.find('.details-btn').text()).toBe('show details')
    });







})
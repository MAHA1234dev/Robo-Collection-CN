import "jest-enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'

configure({ adapter: new Adapter() });
// import Calender from '../eventcalender/Calender'
describe("A suite",  () => {
  it("contains spec with an expectation",  () => {
  const app =   mount(<App />);
  expect(app.find('.App')).toHaveClassName('App');
  })
});



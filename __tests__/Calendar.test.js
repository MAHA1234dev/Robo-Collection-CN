import { render } from "@testing-library/react";
import "jest-enzyme"
import { configure } from 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Events from "../src/components/eventcalender/Calender";
configure({ adapter: new Adapter() });
describe("A suite",  () => {
  it("contains spec with an expectation",  () => {
    render(<Events/>)
  // const app = mount(<Calender />);
  // expect(app.find('.App')).toHaveClassName('App');
  })
});



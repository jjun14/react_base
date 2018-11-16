import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'given2/setup';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.render = render;

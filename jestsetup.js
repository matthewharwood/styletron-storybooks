import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.React = React;
global.render = render;
global.mount = mount;

// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
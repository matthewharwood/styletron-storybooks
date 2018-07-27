import React from 'react';
import {Accordion} from './index';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const engine = new Styletron();

// test('Accordion changes the class when hovered', () => {
//   const component = renderer.create(

//   );
//   console.log(component, 'wtf');
//   let tree = component.toJSON();
//   expect(tree).toBeTruthy();
// });


configure({adapter: new Adapter() });

describe('Link', () => {
  it('should render app', () => {
    const wrapper = shallow(
      <Accordion />
    );
    assert.matchSnapshot(wrapper);
  })
});
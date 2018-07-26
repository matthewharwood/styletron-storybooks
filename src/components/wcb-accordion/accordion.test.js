// Link.react.test.js
import React from 'react';
import {Accordion} from './';
import renderer from 'react-test-renderer';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

const engine = new Styletron();

test('Accordion changes the class when hovered', () => {
  const component = renderer.create(
    <StyletronProvider value={engine}>
      <Accordion>Facebook</Accordion>,
    </StyletronProvider>
  );
  console.log(component);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {Heading} from "./heading";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
const engine = new Styletron();

storiesOf('Heading Link', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .add('Heading link display', () => (
    <Heading />
  ));
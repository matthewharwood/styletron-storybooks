import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Accordion from '../packages/wcb-accordion';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

const engine = new Styletron();

storiesOf('Button', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .add('with nothing', () => (
    <Accordion/>
  ))
  .add('with text', () => (
    <Accordion onClick={action('clicked')}>Hello Button</Accordion>
  ))
  .add('with some emoji', () => (
    <Accordion onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Accordion>
  ));
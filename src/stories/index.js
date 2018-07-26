import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
// import withTests from 'storybook-addon-jest';
// import jestTestResults from '../../.jest-test-results.json';
// .addDecorator(withTests(jestTestResults, { filesExt: '.test.js' })('Accordion'))
import {Accordion} from "../components/wcb-accordion/accordion";

const engine = new Styletron();

storiesOf('Accordion', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .addDecorator(checkA11y)

  .add('with nothing', () => (
    <Accordion/>
  ))
  .add('with text', () => (
    <Accordion onClick={action('clicked')}>Hello Button</Accordion>
  ))
  .add('with some emoji', () => (
    <Accordion onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Accordion>
  ));
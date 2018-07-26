import React from 'react';
import {storiesOf} from '@storybook/react';

import {Accordion} from "../components/wcb-accordion/accordion";
import {action} from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('Accordion', module)
  .add('with nothing', () => (
    <button>
      Accessible button
    </button>
  ), { notes: 'some notes one this' })
  .add('with a button', () => (
    <button disabled={boolean('Disabled', false)} >
      {text('Label', 'Hello Storybook')}
    </button>
  ))
  .add('with text', () => (
    <button style={{backgroundColor: 'red', color: 'darkRed',}}>
      Inaccessible button
    </button>
  ))
  .add('with some emoji', () => (
    <Accordion onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Accordion>
  ));
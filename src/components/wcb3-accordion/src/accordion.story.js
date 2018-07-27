import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs'
import {Accordion} from "./accordion";


storiesOf('Accordion', module)
  .add('with some emoji', () => (
    <Accordion />
  ));

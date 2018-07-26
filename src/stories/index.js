import React from 'react';
import {storiesOf} from '@storybook/react';

import {Accordion} from "../components/wcb-accordion/accordion";
import {action} from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('Accordion', module)
  .add('with some emoji', () => (
    <Accordion />
  ));
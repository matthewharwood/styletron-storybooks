import React from 'react';
import {storiesOf} from '@storybook/react';
import {CtaLink} from "./";

storiesOf('Cta Link', module)
  .add('CTA link display', () => (
    <CtaLink />
  ));
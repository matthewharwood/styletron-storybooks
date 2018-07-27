import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {CtaLink} from "../index";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
const engine = new Styletron();

storiesOf('Cta Link', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .add('CTA link display', () => (
    <CtaLink />
  ));
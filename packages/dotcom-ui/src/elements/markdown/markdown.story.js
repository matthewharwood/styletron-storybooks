import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {Markdown} from "./markdown";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
const engine = new Styletron();

storiesOf('Markdown Link', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .add('Markdown shall display', () => (
    <Markdown />
  ));
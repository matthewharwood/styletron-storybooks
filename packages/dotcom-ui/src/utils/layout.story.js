import React from 'react';
import {storiesOf, addDecorator} from '@storybook/react';
import {Layout} from "./layout";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
const engine = new Styletron();

storiesOf('Utils Layout', module)
  .addDecorator(story => (
    <StyletronProvider value={engine}>
      {story()}
    </StyletronProvider>
  ))
  .add('Utils Layout shall display', () => (
    <Layout>
      <p>heloo</p>
      <p>heloo</p>
      <p>heloo</p>
      <p>heloo</p>
    </Layout>
  ));
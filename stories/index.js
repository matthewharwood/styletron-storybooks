import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from '../packages/wcb-accordion';
import {Provider as StyletronProvider} from 'styletron-react';
import {Server as Styletron} from 'styletron-engine-atomic';


const injectDeclarationCompatMixin = Base =>
  class extends Base {
    // $FlowFixMe
    injectDeclaration({prop, val, media, pseudo}) {
      let style = {[prop]: val};
      if (pseudo) {
        style = {
          [pseudo]: style,
        };
      }
      if (media) {
        style = {
          [media]: style,
        };
      }
      return this.renderStyle(style);
    }
  };
const StyletronCompat = injectDeclarationCompatMixin(Styletron);
const engine = new StyletronCompat();

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
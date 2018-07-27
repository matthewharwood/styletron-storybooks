import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {configureActions} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';

import {withKnobs} from '@storybook/addon-knobs'
import {configureViewport} from '@storybook/addon-viewport';
import {setOptions} from '@storybook/addon-options';
import {withNotes} from '@storybook/addon-notes';
import {withBackgrounds} from '@storybook/addon-backgrounds';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
const engine = new Styletron();
addDecorator(story => (
  <StyletronProvider value={engine}>
    {story()}
  </StyletronProvider>
));
addDecorator(checkA11y);
addDecorator(
  withBackgrounds([
    {name: 'default', value: '#ffffff', default: true},
    {name: 'black', value: '#000000'},
    {name: 'carbon', value: '#3b5998'},
  ])
);
addDecorator(withNotes);
const newViewports = {
  default: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
    },
    type: 'desktop',
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

configureViewport({
  viewports: newViewports
});



configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'D O T C O M / B L O C K S',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: null,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: false, // true by default
});

addDecorator(withKnobs);

const req = require.context('../packages', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
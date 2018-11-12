import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import centered from '@storybook/addon-centered';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { theme } from '../src/ui/theme';

addDecorator(withThemesProvider([theme]));

addDecorator(centered);

try {
  const results = require('../jest-test-results.json');

  addDecorator(
    withTests({
      results,
    })
  );
} catch (e) {
  console.warn(e.message);
}

addDecorator(checkA11y);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

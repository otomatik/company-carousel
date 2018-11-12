import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { More, Navigation, Play } from '../ui/button';
import { action } from '@storybook/addon-actions';
import React from 'react';

export const buttonStories = storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['navigation'] })
  .add('arrows', () => (
    <>
      <Navigation key="left" direction="left" onClick={action('clicked')} />
      <br />
      <Navigation key="right" direction="right" onClick={action('clicked')} />
    </>
  ))
  .addParameters({ jest: ['play'] })
  .add('play', () => <Play onClick={action('play')} />)
  .addParameters({ jest: ['more'] })
  .add('more', () => <More onClick={action('more')} />);

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { More, Navigation, Play } from '../ui/button';
import { action } from '@storybook/addon-actions';
import React from 'react';

export const buttonStories = storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('arrows', () => [
    <Navigation key="left" direction="left" onClick={action('clicked')} />,
    <Navigation key="right" direction="right" onClick={action('clicked')} />,
  ])
  .add('play', () => <Play onClick={action('play')} />)
  .add('more', () => <More onClick={action('more')} />);

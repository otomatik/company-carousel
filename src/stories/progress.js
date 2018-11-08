import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Progress } from '../ui/progress';
import React from 'react';

export const progressStories = storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => <Progress percentage={number('percentage', 50)} />);

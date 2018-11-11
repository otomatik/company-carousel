import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Progress } from '../ui/progress';
import React from 'react';

export const progressStories = storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['progress'] })
  .add('horizontal', () => (
    <Progress
      percentage={number('percentage', 50, {
        range: true,
        min: 0,
        max: 100,
        step: 10,
      })}
    />
  ));

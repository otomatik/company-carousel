import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '../ui/progress';
import { Carousel } from '../ui/carousel';

storiesOf('Carousel', module)
  .add('desktop', () => <Carousel />)
  .add('mobile', () => <Carousel mobile />);

storiesOf('Progress', module).add('horizontal', () => <Progress />);

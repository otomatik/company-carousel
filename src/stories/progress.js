import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Progress } from '../ui/progress';
import React from 'react';
import styled from 'styled-components';

export const progressStories = storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['progress'] })
  .add('horizontal', () => (
    <ProgressContainer>
      <Progress
        percentage={number('percentage', 50, {
          range: true,
          min: 0,
          max: 100,
          step: 10,
        })}
      />
    </ProgressContainer>
  ));

const ProgressContainer = styled.div`
  width: 90vw;
`;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '../ui/progress';
import { Carousel } from '../ui/carousel';
import { Grid } from '../ui/grid';
import { number, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

storiesOf('Carousel', module)
  .addDecorator(withKnobs)
  .add('desktop', () => (
    <Carousel columns={2} rows={2} cursor={number('cursor', 0)} />
  ))
  .add('mobile', () => (
    <Carousel mobile rows={2} cursor={number('cursor', 0)} />
  ));

const GridContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('2 x 2', () => (
    <GridContainer>
      <Grid columns={2} rows={2} currentArea={number('current area', 0)} />
    </GridContainer>
  ))
  .add('3 x 2', () => (
    <GridContainer>
      <Grid columns={2} rows={3} currentArea={number('current area', 0)} />
    </GridContainer>
  ))
  .add('2 x 3', () => (
    <GridContainer>
      <Grid columns={3} rows={2} currentArea={number('current area', 0)} />
    </GridContainer>
  ));

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => <Progress percentage={number('percentage', 50)} />);

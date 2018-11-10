import { storiesOf } from '@storybook/react';
import { Carousel } from '../ui/carousel';
import { data } from '../data';
import styled from 'styled-components';
import React from 'react';

export const carouselStories = storiesOf('Carousel', module)
  .add('desktop', () => <Carousel data={data} columns={2} rows={2} />)
  .add('autoplay', () => <Carousel autoplay data={data} columns={2} rows={2} />)
  .add('mobile', () => (
    <MobileContainer>
      <Carousel data={data} mobile rows={2} />
    </MobileContainer>
  ));

const MobileContainer = styled.div`
  height: 100vh;
  width: 300px;
  overflow: hidden;
`;
